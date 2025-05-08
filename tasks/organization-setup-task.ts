import { schemaTask } from '@trigger.dev/sdk/v3'
import { z } from 'zod'

export const organizationSetupTask = schemaTask({
  id: 'organization-setup-task',
  schema: z.object({
    organizationId: z.string().min(1).uuid(),
  }),
  run: async (payload) => {
    console.log(payload.organizationId)
  },
})
