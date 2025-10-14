import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

interface IProduct {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
export default function Edit() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IProduct>();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`http://localhost:3000/products/${id}`);
      reset(res.data);
    };
    fetchProduct();
  }, [id, reset]);

  const onSubmit = async (data: IProduct) => {
    await axios.put(`http://localhost:3000/products/${id}`, data);
    alert(" Cập nhật sản phẩm thành công!");
    navigate("/admin/list");
  };

 return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-success text-white">
          <h4 className="mb-0">Chỉnh sửa sản phẩm</h4>
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

            <button type="submit" className="btn btn-success w-100">
              Lưu thay đổi
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
