import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
interface IProduct {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
export default function Add() {
  const { register, handleSubmit,watch, formState: { errors } } = useForm<IProduct>();
  const navigate = useNavigate();

  const onSubmit = async (data: IProduct) => {
    await axios.post("http://localhost:3000/products", data);
    alert("Thêm sản phẩm thành công!");
    navigate("/admin/list");
  };

return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Thêm sản phẩm mới</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Tên sản phẩm */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Tên sản phẩm</label>
              <input
                {...register("title", { required: "Vui lòng nhập tên sản phẩm" })}
                type="text"
                className="form-control"
                placeholder="Nhập tên sản phẩm"
              />
              {errors.title && <div className="text-danger small">{errors.title.message}</div>}
            </div>

            {/* Mô tả */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Mô tả</label>
              <textarea
                {...register("description", { required: "Vui lòng nhập mô tả" })}
                className="form-control"
                rows={3}
                placeholder="Nhập mô tả sản phẩm"
              ></textarea>
              {errors.description && <div className="text-danger small">{errors.description.message}</div>}
            </div>

            {/* Giá */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Giá (VNĐ)</label>
              <input
                {...register("price", {
                  required: "Vui lòng nhập giá",
                  min: { value: 1, message: "Giá phải lớn hơn 0" },
                })}
                type="number"
                className="form-control"
                placeholder="Nhập giá sản phẩm"
              />
              {errors.price && <div className="text-danger small">{errors.price.message}</div>}
            </div>

            {/* Ảnh */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Link ảnh</label>
              <input
                {...register("image", { required: "Vui lòng nhập link ảnh" })}
                type="text"
                className="form-control"
                placeholder="https://..."
              />
              {errors.image && <div className="text-danger small">{errors.image.message}</div>}
            </div>

            {/* Preview ảnh */}
            <div className="text-center mb-3">
              <img
                src={
                  watch("image") ||
                  "https://via.placeholder.com/150x150.png?text=Preview"
                }
                alt="Preview"
                className="img-thumbnail"
                style={{ width: 150, height: 150 }}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Thêm sản phẩm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
