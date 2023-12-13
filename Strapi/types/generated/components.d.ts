import type { Schema, Attribute } from '@strapi/strapi';

export interface TextDisplayText extends Schema.Component {
  collectionName: 'components_text_display_texts';
  info: {
    displayName: 'DisplayText';
    icon: 'alien';
  };
  attributes: {
    Title: Attribute.Blocks;
    Description: Attribute.String;
    Body: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'text.display-text': TextDisplayText;
    }
  }
}
