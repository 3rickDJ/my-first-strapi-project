import type { Schema, Attribute } from '@strapi/strapi';

export interface UserComponent extends Schema.Component {
  collectionName: 'components_user_components';
  info: {
    displayName: 'component';
    icon: 'play';
  };
  attributes: {
    a: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'user.component': UserComponent;
    }
  }
}
