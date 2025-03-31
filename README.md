This is a [Next.js](https://nextjs.org) project bootstrapped with [
`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash

npm install
# or
yarn install

npm run dev
# or
yarn dev
```

# Questionnaire Configuration Documentation

## Overview

The `configuration.json` file defines the structure and flow of your questionnaire application. It contains all
questions, answer options, and navigation logic.

## Structure

```json
{
  "id": "questionnaire",
  "title": "Questionnaire",
  "steps": [
    {
      "id": "step_id",
      "screenType": "radioGroup|text",
      "question": "Question text",
      "text": "Optional additional text",
      "options": [
        ...
      ],
      "isMiddleware": false,
      "valueName": "optionalCustomValueName",
      "dynamicData": [
        "gender",
        "hasChildren"
      ],
      "middleware": "middlewareStepId"
    }
  ]
}
```

## Properties

### Root Object

- `id`: Unique identifier for the questionnaire
- `title`: Title of the questionnaire
- `steps`: Array of step objects that define each question

### Step Object

- `id`: Unique identifier for the step
- `screenType`: Type of screen to display
    - `radioGroup`: Multiple choice question
    - `text`: Information screen with button(s)
- `question`: The question or title text
- `text`: (Optional) Additional descriptive text
- `options`: Array of answer options, or buttons for other types of screens
- `isMiddleware`: (Optional) Whether this screen is an intermediate information screen. If true, considering inverted styles used
- `valueName`: (Optional) Custom name for storing the answer value
- `dynamicData`: (Optional) Array of variable names to use in templates
- `middleware`: (Optional) ID of a middleware screen to show before next step

### Option Object

- `value`: Display text for the option
- `target`: ID of the next step to navigate to
- `booleanValue`: (Optional) Boolean value to store instead of text

## Dynamic Content

Use templates in questions with:

- `{{variableName}}` - Inserts a variable value
- `{{#condition}}Content if true{{/condition}}` - Conditional content

## Example

```json
{
  "id": "gender",
  "screenType": "radioGroup",
  "question": "Select your gender:",
  "options": [
    {
      "value": "Female",
      "target": "nextStepId"
    },
    {
      "value": "Male",
      "target": "nextStepId"
    }
  ]
}
```

## Navigation Flow

The questionnaire progresses based on the `target` property of each selected option, creating a dynamic path through the
questions.
