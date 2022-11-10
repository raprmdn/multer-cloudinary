const Joi = require('joi');
const { StatusCodes: status } = require('http-status-codes');
const { isSlugExistsJoi } = require('../../helpers/existsJoi.helper');
const { apiResponseValidationError } = require("../apiResponse.utils");

const options = {
    abortEarly: false,
    errors: {
        wrap: {
            label: '',
        },
    },
};

module.exports = {
    uploadGalleryValidation: async (req, res, next) => {
        const schema = Joi.object({
            title: Joi.string().required().max(255).label('Title'),
            slug: Joi.string().required()
                .max(255)
                .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
                .label('Slug')
                .external(async (slug) => await isSlugExistsJoi(slug))
                .options({ messages: { 'string.pattern.base': 'Slug must be lowercase and separated by hyphens' } }),
            photo: Joi.any(),
        });

        try {
            await schema.validateAsync(req.body, options);
            if (!req.file) {
                return res.status(422).json({
                    code: 422,
                    status: 'UNPROCESSABLE_ENTITY',
                    message: 'The given data was invalid.',
                    errors: {
                        photo: 'Photo is not allowed to be empty'
                    }
                });
            }

            next();
        } catch (e) {
            return res.status(status.UNPROCESSABLE_ENTITY).json(apiResponseValidationError(e));
        }
    },
};
