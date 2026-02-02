# AI Literacy Assessment Tool

A web-based assessment tool for evaluating AI literacy and competency across six key dimensions. The tool helps users understand their level of proficiency in working with artificial intelligence systems.

**Module**: WIPRO  
**Theme**: AI Literacy Bewertungskatalog

**Note**: All questions, interface text, and result descriptions are in German.

## Features

- **Six Assessment Dimensions**: Covers technical understanding, practical application, critical evaluation, ethics, societal impact, and governance
- **Interactive Quiz Interface**: User-friendly Likert scale and scenario-based questions
- **Progress Tracking**: Visual indicators for completed and in-progress dimensions
- **Results Export**: Save assessment results as JSON files
- **Responsive Design**: Works on desktop and mobile devices
- **Accessibility**: ARIA labels and semantic HTML for screen readers

## Project Structure

```
Fragebogen/
├── app.js          # Main application logic
├── data.js          # Questions database and result texts
├── index.html       # HTML structure
├── style.css        # Styling and layout
├── server.py        # Python server for saving results
├── results/         # Directory for saved assessment results
└── README.md        # This file
```

## Getting Started

### Prerequisites

- Python 3.6 or higher (for the server)
- A modern web browser with JavaScript enabled

### Installation

1. Clone or download this repository
2. No additional dependencies required

### Running the Application

1. **Start the Python server** (optional, for saving results):
   ```bash
   python server.py
   ```
   The server will start on `http://localhost:8000`

2. **Open the application**:
   - If using the server: Navigate to `http://localhost:8000` in your browser
   - Without server: Open `index.html` directly in your browser (results saving will use fallback download)

## Usage

1. **Start Assessment**:
   - Enter your name or ID
   - Select your self-assessment level (Entdecker, Beobachter, Anwender, or Gestalter)
   - Click "Assessment Starten"

2. **Complete Dimensions**:
   - Select a dimension from the dashboard
   - Answer all questions in the quiz
   - Navigate between questions using the Previous/Next buttons
   - Exit anytime to return to the dashboard

3. **View Results**:
   - Click "Ergebnisse anzeigen & Speichern" when all dimensions are completed
   - Review your scores and recommendations
   - Results are automatically saved to the `results/` directory

4. **Load Previous Results**:
   - Click "Ergebnis laden" on the landing page
   - Select a previously saved JSON file
   - View your previous assessment results

## Assessment Dimensions

1. **Technisches Verständnis & Datenkompetenz**: Understanding of AI fundamentals, hallucinations, and data flow
2. **Praktische Anwendung & Toolnutzung**: Prompting strategies, iteration, and human-in-the-loop practices
3. **Kritische Bewertung von KI-Outputs**: Validation, bias detection, and responsibility awareness
4. **Ethik, Rechte & Datenschutz**: Data protection, copyright, and fairness considerations
5. **Gesellschaftliche Wirkung & Nachhaltigkeit**: Sustainability, disinformation, and workplace impact
6. **Risiko, menschliche Aufsicht & Governance**: Risk classification, human oversight, and compliance

## Scoring System

- **Level 0 (Novice)**: Beginner level, focus on knowledge building
- **Level 1 (Awareness)**: Knows theory but applies it uncertainly
- **Level 2 (Practitioner)**: Uses AI safely and efficiently in daily work
- **Level 3 (Expert)**: Masters technique, ethics, and governance at top level

Scores are calculated based on:
- Likert scale responses (1-5)
- Scenario-based gatekeeper questions
- Potential downgrades for critical security failures

## Technical Details

### Code Quality

The codebase follows clean code principles:
- **Modular structure**: Functions with single responsibilities
- **Documentation**: JSDoc comments and inline documentation
- **Constants**: Magic numbers and strings extracted to constants
- **Error handling**: Comprehensive error handling throughout
- **Accessibility**: ARIA labels and semantic HTML
- **Responsive design**: Mobile-friendly CSS with media queries

### Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Format

Saved results are stored as JSON with the following structure:

```json
{
  "user": {
    "name": "User Name",
    "selfAssessment": 2
  },
  "timestamp": "2024-01-01T12:00:00.000Z",
  "averageLevel": "2.5",
  "results": {
    "dimension1": {
      "level": 2,
      "meanScore": 3.2,
      "gatekeeperScore": 1,
      "downgradeReason": null,
      "downgraded": false,
      "raw_answers": { ... }
    }
  }
}
```

## Development

### Code Style

- JavaScript: ES6+ modules, camelCase naming
- Python: PEP 8 style guide, type hints
- HTML: Semantic HTML5, accessibility attributes
- CSS: BEM-inspired naming, CSS custom properties


## License

This project is provided as-is for educational and assessment purposes.

## Author

**Michael Roos**  
HSLU Informatik Rotkreuz

This assessment tool was developed as part of the WIPRO module at HSLU (Hochschule Luzern) Informatik Rotkreuz for evaluating AI competency levels.
