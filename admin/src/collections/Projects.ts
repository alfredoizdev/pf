import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
    access: {
	read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
	{
      name: 'content',
      type: 'richText',
    },
	{
      name: 'extract',
      type: "textarea",
    },
  ],
}

export default Projects;