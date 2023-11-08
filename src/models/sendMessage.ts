import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { TFormData } from "./formSchema";
import axiosInstance from "../config/apiClient";

const sendMessage = async (url: string, data: TFormData) => {
  const controller = new AbortController();
  try {
    const result = await axiosInstance.post(url, data, {
      signal: controller.signal,
    });
    console.log(result.data);
  } catch (err) {
    if (err instanceof AxiosError)
      return toast.error("hata gonderilemedi", {
        toastId: "messageError",
      });
  }
  toast.success("message gonderildi", {
    toastId: "messageSuccess",
  });
};

export default sendMessage;
