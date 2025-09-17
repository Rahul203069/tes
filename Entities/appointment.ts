export const appointment={
  "name": "Appointment",
  "type": "object",
  "properties": {
    "patient_name": {
      "type": "string",
      "description": "Full name of the patient"
    },
    "patient_email": {
      "type": "string",
      "format": "email",
      "description": "Email address of the patient"
    },
    "patient_phone": {
      "type": "string",
      "description": "Phone number of the patient"
    },
    "service": {
      "type": "string",
      "description": "The requested dental service"
    },
    "preferred_date": {
      "type": "string",
      "format": "date-time",
      "description": "The patient's preferred date and time for the appointment"
    },
    "notes": {
      "type": "string",
      "description": "Any additional notes or comments from the patient"
    },
    "status": {
      "type": "string",
      "enum": [
        "Pending",
        "Confirmed",
        "Completed",
        "Cancelled"
      ],
      "default": "Pending",
      "description": "The current status of the appointment"
    }
  },
  "required": [
    "patient_name",
    "patient_email",
    "service",
    "preferred_date"
  ]
}