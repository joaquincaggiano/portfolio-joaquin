"use server";

import { sendMail } from "@/services/mail";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string({
      required_error: "Debes escribir un nombre",
      invalid_type_error: "El nombre debe ser un string",
    })
    .trim()
    .min(1, { message: "Debes escribir un nombre" }),
  email: z
    .string({
      required_error: "Debes escribir un email",
      invalid_type_error: "El email debe ser un string",
    })
    .email({ message: "Debes escribir un email válido" }),
  phone: z
    .string({
      required_error: "Debes escribir un teléfono",
      invalid_type_error: "El teléfono debe ser un string",
    })
    .trim()
    .min(1, { message: "Debes escribir un teléfono" }),
  message: z
    .string({
      required_error: "Debes escribir un mensaje",
      invalid_type_error: "El mensaje debe ser un string",
    })
    .trim()
    .min(1, { message: "Debes escribir un mensaje" }),
});

export type InitialStateContact = {
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
  message?: string | null;
};

export const sendEmailToMe = async (
  prevState: InitialStateContact | undefined,
  formData: FormData
) => {
  const validateFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Faltan completar campos",
    };
  }

  const html = `<table width="100%" border="0" cellspacing="0" cellpadding="0"
          style="background-color: #F7F7F7;padding-top: 20px; padding-bottom: 20px;">
          <tr>
            <td align="center">
              <div style="background-color: #FFFFFF; box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.20); font-family: Arial;
                margin-top: 20px; max-width: 550px; width: 100%; text-align: left;">
                <div style="background-color: #2B4390; padding: 20px; text-align: center;">
                  <h2 style="color: #FFFFFF; font-size: 24px; font-weight: 700;">
                    Propuesta de trabajo
                  </h2>
                </div>

                <div style="color: #000000; font-size: 16px; font-weight: 400; padding: 8px 30px;">
                  <p>Nombre: ${validateFields.data.name}</p>
                  <p>email: ${validateFields.data.email}</p>
                  <p>Teléfono: ${validateFields.data.phone}</p>
                  <p>Propuesta: ${validateFields.data.message}</p>
                </div>
              </div>
            </td>
          </tr>
        </table>`;

  await sendMail("joaquincaggiano@gmail.com", "Propuesta de trabajo", html);
};
