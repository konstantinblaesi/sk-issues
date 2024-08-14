import { setError, superValidate } from "sveltekit-superforms"
import { zod } from "sveltekit-superforms/adapters"
import { Schema1 } from "./shared"


export async function load({ url: { searchParams } }) {
    const triggerError = searchParams.has("error")
    const form1 = await superValidate(zod(Schema1))
    const form2 = await superValidate(zod(Schema1))

    if (triggerError) setError(form1, "value1", "bad value1")

    return { form1, form2 }
}

export const actions = {

}