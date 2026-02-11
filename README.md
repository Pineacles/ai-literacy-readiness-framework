# AI Literacy Readiness Framework

A governance-aligned prototype for assessing organizational AI literacy and readiness.

## Overview

This repository contains a web-based AI literacy assessment framework that helps organizations evaluate workforce readiness for responsible AI usage.

The model combines technical understanding, ethical awareness, critical evaluation, and governance principles across six assessment dimensions. It is designed to support practical capability development while reflecting emerging regulatory expectations.
The model is designed for role-based assessment in alignment with EU AI Act literacy obligations (Article 4).

Intended for innovation teams, compliance officers, HR training leads, and organizations integrating AI into operational workflows.

The framework enables organizations to:
- Identify AI competency gaps
- Detect overconfidence in AI usage
- Structure AI literacy development initiatives
- Support governance and compliance readiness (including EU AI Act literacy obligations)

## Why AI Literacy Matters

As AI use expands and regulation matures, AI literacy is becoming an operational governance requirement, not just a training topic.

Empirical studies show rising AI adoption alongside governance gaps and risk behaviors, including shadow AI usage and overconfidence in outputs. This framework addresses that structural gap.

Key risks addressed by this framework include:
- Blind trust in AI-generated outputs
- Limited understanding of hallucinations and bias
- Missing human oversight mechanisms
- Overestimation of individual AI expertise
- Unstructured AI adoption in business processes

## Conceptual Foundation

The framework is informed by:
- EU AI Act literacy obligations (Article 4) and related human oversight principles (Articles 13-14)
- UNESCO AI competency perspectives
- Critical AI literacy principles (including Dagstuhl Triangle references)
- Corporate governance and risk management thinking

The objective is to assess not only technical capability, but also responsible and sustainable AI integration in organizational settings.

## Research & Model Development

The framework was developed using a Design Science Research approach, combining literature synthesis, model construction, and prototype evaluation.

The six-dimension model was developed through structured literature analysis and synthesis of AI literacy and governance frameworks.

Existing approaches often emphasize either technical skills or ethical awareness. This model integrates technical, operational, and governance dimensions into a unified organizational readiness perspective.

The scoring logic, including downgrade mechanisms for critical failures, follows risk-based thinking aligned with responsible AI deployment principles.
The framework explicitly addresses self-report bias and overconfidence through scenario-based gatekeeper logic inspired by research on AI dependency and calibrated trust.

## Framework Model: Six Assessment Dimensions

1. **Technical Understanding & Data Competence**  
   Fundamentals of AI systems, data quality, model limitations, and error patterns.
2. **Practical Application & Tool Usage**  
   Prompting, workflow integration, and safe operational use of AI tools.
3. **Critical Evaluation of AI Outputs**  
   Validation, plausibility checks, bias detection, and escalation behavior.
4. **Ethics, Rights & Data Protection**  
   Privacy, fairness, intellectual property awareness, and compliance sensitivity.
5. **Societal Impact & Sustainability**  
   Broader consequences of AI decisions in work and society.
6. **Risk, Human Oversight & Governance**  
   Risk awareness, oversight responsibilities, governance alignment, and human oversight modes (for example Human-in-the-Loop and Human-on-the-Loop).

Each dimension combines:
- Likert-scale knowledge and behavior indicators
- Scenario-based gatekeeper questions
- Downgrade logic for critical failures in safety/compliance-relevant topics

## Competency Levels

The framework classifies assessment outcomes into four progressive competency levels:

**Level 0 - Foundational**  
Limited understanding of AI systems and associated risks. Requires structured knowledge building and guided usage.

**Level 1 - Aware**  
Understands core AI concepts and risks but applies them inconsistently in practice.

**Level 2 - Practitioner**  
Uses AI tools responsibly in daily work, applies validation techniques, and demonstrates awareness of governance implications.

**Level 3 - Governance-Aligned**  
Demonstrates integrated technical, ethical, and governance competence. Capable of structured oversight and responsible AI integration within organizational contexts.

Overall levels are derived from:
- Aggregated dimension scores
- Scenario-based validation
- Risk-based downgrade mechanisms for critical failures

## Prototype Implementation

The current repository provides a functional prototype with:
- Interactive browser-based assessment flow
- Multi-dimensional scoring logic
- JSON export and import for assessment results
- Lightweight local Python server for result persistence
- Responsive and accessible frontend structure

**Language note:** The current assessment questions, interface text, and result descriptions are in German.
The conceptual model is language-independent; only the prototype implementation is currently localized in German.

## Interface Screenshots

The following screenshots illustrate the current prototype interface and assessment flow.

### Landing Page

![Landing page of the AI Literacy Readiness Framework](assets/screenshots/landing_page.png)

### Dimension Dashboard

![Dashboard with six assessment dimensions](assets/screenshots/dashboard.png)

### Assessment Flow

![Assessment question view](assets/screenshots/assessment.png)

### Likert-Scale Validation

![Likert-scale question interface](assets/screenshots/likert.png)

### Scenario-Based Gatekeeper

![Scenario-based gatekeeper question](assets/screenshots/szenario.png)

## Technical Information

- **Stack:** HTML5, CSS3, Vanilla JavaScript, Python
- **Runtime:** No external dependencies required
- **Structure:** `index.html`, `style.css`, `app.js`, `data.js`, `server.py`, `assets/screenshots/`, `results/`
- **Run locally:**  
  1. Start server (optional, for persistence): `python server.py`  
  2. Open `http://localhost:8000` (or open `index.html` directly without server persistence)

## Project Status

Prototype stage (concept validation). Potential next steps:
- Organizational dashboards
- Role-based assessment variants
- Analytics and benchmarking
- LMS and internal platform integration

## Origin

Originally developed in 2025 within the WIPRO program at HSLU Informatik (Switzerland).
