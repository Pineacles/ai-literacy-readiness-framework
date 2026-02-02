"""
AI Literacy Assessment Tool - Server
Simple HTTP server for saving assessment results to JSON files
"""

import http.server
import socketserver
import json
import os
import re
from typing import Dict, Any

# Configuration
PORT = 8000
RESULTS_DIR = "results"
ENDPOINT_SAVE_RESULT = "/save-result"
ENCODING = "utf-8"

# Ensure results directory exists
if not os.path.exists(RESULTS_DIR):
    os.makedirs(RESULTS_DIR)
    print(f"📁 Created directory: {RESULTS_DIR}")


class CustomHandler(http.server.SimpleHTTPRequestHandler):
    """
    Custom HTTP request handler for saving assessment results
    """

    def do_POST(self) -> None:
        """
        Handle POST requests to save assessment results
        """
        if self.path == ENDPOINT_SAVE_RESULT:
            self.handle_save_result()
        else:
            self.send_error_response(404, "Not Found")

    def handle_save_result(self) -> None:
        """
        Process and save assessment result data
        """
        try:
            content_length = int(self.headers.get('Content-Length', 0))
            if content_length == 0:
                raise ValueError("Empty request body")

            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode(ENCODING))

            filepath = self.generate_safe_filepath(data)
            self.save_result_file(filepath, data)
            self.send_success_response(filepath)

        except json.JSONDecodeError as e:
            print(f"❌ JSON decode error: {e}")
            self.send_error_response(400, "Invalid JSON data")
        except ValueError as e:
            print(f"❌ Validation error: {e}")
            self.send_error_response(400, str(e))
        except Exception as e:
            print(f"❌ Unexpected error: {e}")
            self.send_error_response(500, "Internal server error")

    def generate_safe_filepath(self, data: Dict[str, Any]) -> str:
        """
        Generate a safe filepath from user data
        
        Args:
            data: Assessment result data dictionary
            
        Returns:
            str: Safe filepath for the result file
        """
        user_name = data.get('user', {}).get('name', 'Unbekannt')
        # Only allow letters, numbers, and underscores (security)
        safe_name = re.sub(r'[^a-zA-Z0-9äöüÄÖÜß]', '_', user_name)
        filename = f"AI_Assessment_{safe_name}.json"
        return os.path.join(RESULTS_DIR, filename)

    def save_result_file(self, filepath: str, data: Dict[str, Any]) -> None:
        """
        Save result data to JSON file
        
        Args:
            filepath: Path to save the file
            data: Assessment result data dictionary
        """
        with open(filepath, 'w', encoding=ENCODING) as file:
            json.dump(data, file, ensure_ascii=False, indent=2)
        print(f"✅ Ergebnis gespeichert: {filepath}")

    def send_success_response(self, filepath: str) -> None:
        """
        Send success response with filepath
        
        Args:
            filepath: Path to the saved file
        """
        response_data = {
            "status": "success",
            "path": filepath
        }
        self.send_json_response(200, response_data)

    def send_error_response(self, status_code: int, message: str) -> None:
        """
        Send error response
        
        Args:
            status_code: HTTP status code
            message: Error message
        """
        response_data = {
            "status": "error",
            "message": message
        }
        self.send_json_response(status_code, response_data)

    def send_json_response(self, status_code: int, data: Dict[str, Any]) -> None:
        """
        Send JSON response
        
        Args:
            status_code: HTTP status code
            data: Response data dictionary
        """
        response_json = json.dumps(data, ensure_ascii=False)
        self.send_response(status_code)
        self.send_header('Content-type', 'application/json; charset=utf-8')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(response_json.encode(ENCODING))

    def log_message(self, format: str, *args: Any) -> None:
        """
        Override to suppress default logging
        """
        pass


def main() -> None:
    """
    Start the HTTP server
    """
    print(f"🚀 Server läuft auf http://localhost:{PORT}")
    print(f"📂 Ergebnisse werden gespeichert in: ./{RESULTS_DIR}/")
    print("Drücken Sie Ctrl+C zum Beenden\n")

    try:
        with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n👋 Server wird beendet...")
    except Exception as e:
        print(f"❌ Server-Fehler: {e}")


if __name__ == "__main__":
    main()
