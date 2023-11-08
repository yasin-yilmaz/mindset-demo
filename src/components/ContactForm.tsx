import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TFormData, formSchema } from "../models/formSchema";

import sendMessage from "../models/sendMessage";
import { useEffect } from "react";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm<TFormData>({ resolver: zodResolver(formSchema) });

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <form
      className="bg-white w-full max-w-[420px] mx-auto"
      onSubmit={handleSubmit((data) => sendMessage("/test", data))}
    >
      <header className="--form-header">
        <h1 className="text-2xl text-white">İletişim Formu</h1>
        <span className="block text-sm mt-2">Bize Ulaşın</span>
      </header>
      <div className="py-4 px-6">
        <div className="mt-3">
          <div className="--radio-set">
            <div className="--radio-wrapper">
              <input
                {...register("subject")}
                className="--radio-input"
                value="genel"
                name="subject"
                type="radio"
                id="formGenel"
                defaultChecked
              />
              <label className="--radio-label" htmlFor="formGenel">
                Genel
              </label>
            </div>
            <div className="--radio-wrapper">
              <input
                {...register("subject")}
                className="form__radio"
                value="egitim"
                name="subject"
                type="radio"
                id="formEgitim"
              />
              <label className="--radio-label" htmlFor="formEgitim">
                Eğitim
              </label>
            </div>
          </div>
        </div>
        <input
          {...register("fullName")}
          className="--form-input"
          name="fullName"
          id="fullName"
          placeholder="Ad Soyad"
        />
        {errors.fullName && (
          <p className="--form-error">{errors.fullName.message}</p>
        )}

        <input
          className="--form-input"
          {...register("email", { required: true, minLength: 3 })}
          placeholder="E-Mail"
        />
        {errors.email && <p className="--form-error">{errors.email.message}</p>}
        <input
          type="tel"
          className="--form-input"
          {...register("phone")}
          placeholder="Telefon"
        />
        {errors.phone && <p className="--form-error">{errors.phone.message}</p>}
        <textarea
          className="--form-input min-h-[7rem] py-2"
          {...register("message")}
          placeholder="Mesaj"
        ></textarea>
        <button
          className="--form-button"
          disabled={!isValid || isSubmitting}
          type="submit"
        >
          {!isSubmitting ? "Gönder" : "Gönderiliyor..."}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
