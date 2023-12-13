import type { Schema, Attribute } from '@strapi/strapi';

export interface PostsContainer extends Schema.Component {
  collectionName: 'components_posts_containers';
  info: {
    displayName: 'container';
    description: '';
  };
  attributes: {
    post: Attribute.Component<'posts.item', true>;
  };
}

export interface PostsItem extends Schema.Component {
  collectionName: 'components_posts_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'posts.container': PostsContainer;
      'posts.item': PostsItem;
    }
  }
}
