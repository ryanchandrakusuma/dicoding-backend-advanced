const InvariantError = require('../../exceptions/InvariantError');
const ExportNotesPayloadSchema = require('./schema');

const ExportsValidator = {
  validateExportNotesPayload: (payload) => {
    console.log('masuk validator');
    const validationResult = ExportNotesPayloadSchema.validate(payload);

    if (validationResult.error) {
      console.log('payload not valid');
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = ExportsValidator;
