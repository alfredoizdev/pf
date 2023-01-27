

import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Menus: CollectionConfig = {
  slug: 'menus',
  access: {
	read: () => true,
  },
  admin: {
    useAsTitle: 'label',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
    },
	{
      name: 'target',
      type: 'text',
    },
  ],
}

export default Menus;