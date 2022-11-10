const { Gallery } = require('../models');
const Joi = require('joi');

const customThrowErrorJoiString = (msg, field) => {
    throw new Joi.ValidationError(
        msg,
        [
            {
                message: msg,
                path: [field],
                type: `string.${field}`,
                context: {
                    key: field,
                    label: field,
                    field,
                }
            },
        ],
        field,
    );
};

module.exports = {
    isSlugExistsJoi: async (slug) => {
        const gallery = await Gallery.findOne({ where: { slug } })
        if (gallery) customThrowErrorJoiString('Slug already been taken', 'slug');

        return true;
    },
};
