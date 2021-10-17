"use strict";

const slugify = require("slugify");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.menus) {
        data.menus.forEach((menu) => {
          if (menu.items) {
            menu.items.forEach((item) => {
              item.slug = slugify(item.title);
            });
          }
        });
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.menus) {
        data.menus.forEach((menu) => {
          if (menu.items) {
            menu.items.forEach((item) => {
              item.slug = slugify(item.title);
            });
          }
        });
      }
    },
  },
};