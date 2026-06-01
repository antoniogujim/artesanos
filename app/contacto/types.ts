export interface ContactState {
  status: "idle" | "success" | "error";
  errors: {
    nombre?: string;
    email?: string;
    telefono?: string;
    mensaje?: string;
  };
  message?: string;
}

export const initialState: ContactState = {
  status: "idle",
  errors: {},
};
