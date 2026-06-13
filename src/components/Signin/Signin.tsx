//import { login } from "@/helpers/user";
import { postSignin } from "@/services/postSignin";
import { useState } from "react";
import Modal from "@/components/Modal";
import { MODE, type SigninProps, type User } from "./types";
import { postSignup } from "@/services/postSignup";
import { useStore } from "@/store";
import { TbEye, TbEyeOff } from "react-icons/tb";

export const Signin = ({ show, onClose }: SigninProps) => {
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<MODE>(MODE.signin);
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    username: "",
  });

  const setUserStore = useStore((s) => s.setUser);

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    setError(null);

    if (mode === MODE.signin) {
      postSignin(user)
        .then((response) => {
          setUserStore(response);
          onClose();
        })
        .catch((error) => {
          setError(error.message);
        });
    }
    if (mode === MODE.signup) {
      postSignup({ ...user, username: user.username ?? "" })
        .then((response) => {
          setUserStore(response);
          onClose();
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  return (
    <Modal
      title={mode === MODE.signin ? "Connexion" : "Créer un compte"}
      show={show}
      onClose={onClose}
      validateButton={{
        label: mode === MODE.signin ? "Se connecter" : "S'inscrire",
        cb: () => {
          handleSubmit();
        },
        isDisabled: false,
      }}
      optionalButton={{
        label: mode === MODE.signin ? "Créer un compte" : "J'ai déjà un compte",
        cb: () => {
          setMode((prev) => (prev === MODE.signup ? MODE.signin : MODE.signup));
        },
        isDisabled: false,
      }}
    >
      <section className="flex flex-col w-60 gap-4 items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4  w-full text-sm"
        >
          {mode === MODE.signup && (
            <>
              <label htmlFor="username" className="w-full text-center">
                Username
              </label>
              <input
                autoComplete="off"
                type="text"
                placeholder="Username"
                id="username"
                name="username"
                className="input"
                formNoValidate
                value={user.username ?? ""}
                onChange={(e) => {
                  setUser((prev) => ({ ...prev, username: e.target.value }));
                }}
              />
            </>
          )}

          <label htmlFor="email" className="w-full text-center">
            Email
          </label>
          <input
            autoComplete="off"
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            className="input"
            formNoValidate
            value={user.email ?? ""}
            onChange={(e) => {
              setUser((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
          <label htmlFor="password" className="w-full text-center">
            Mot de passe
          </label>
          <div className="relative w-full">
            <input
              autoComplete="off"
              type={showPassword ? "text" : "password"}
              placeholder="Mot de passe"
              id="password"
              name="password"
              className="input w-full pr-10"
              value={user.password ?? ""}
              onChange={(e) => {
                setUser((prev) => ({ ...prev, password: e.target.value }));
              }}
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-ink cursor-pointer"
            >
              {showPassword ? <TbEyeOff size={18} /> : <TbEye size={18} />}
            </button>
          </div>

          {error && (
            <p className="text text-marvel-700 w-full text-center">{error}</p>
          )}
        </form>
      </section>
    </Modal>
  );
};
