import { Dialog } from "@mui/material";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  defaultData?: any;
}

const UserFormDialog = ({ open, onClose, onSave, defaultData }: Props) => {
  const [form, setForm] = useState(defaultData || {
    name: "",
    email: "",
    address: "",
    role: "user",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="p-6 w-96 space-y-4">
        <h3 className="text-xl font-bold">User Form</h3>
        {["name", "email", "address"].map((field) => (
          <input
            key={field}
            name={field}
            value={(form as any)[field]}
            onChange={handleChange}
            placeholder={field[0].toUpperCase() + field.slice(1)}
            className="w-full border px-3 py-2 rounded"
          />
        ))}
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => onSave(form)}
        >
          Save
        </button>
      </div>
    </Dialog>
  );
};

export default UserFormDialog;
