import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import List from './pages/List'
import Add from './pages/Add'
import Edit from './pages/Edit'

function App() {

  return (
    <>
      {/* Header với Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <strong>WEB502 App</strong>
          </a>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Trang chủ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Danh sách</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Thêm mới</a>
              </li>
            </ul>
            
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Đăng nhập</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Đăng ký</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main content area */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <h1 className="display-4 text-center mb-4">Chào mừng đến với WEB502</h1>
            <p className="lead text-center">Ứng dụng quản lý dữ liệu</p>
          </div>
        </div>
      </div>
      <div>
         <Routes>
              <Route path="/courses" element={<List />}></Route>
              <Route path="/courses/create" element={<Add />}></Route>
              <Route path="/courses/:id/update" element={<Edit />}></Route>
            </Routes>
      </div>
      <Toaster/>
    </>
  )
}

export default App
