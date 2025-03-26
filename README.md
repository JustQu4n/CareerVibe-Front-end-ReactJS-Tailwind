# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

find-job-frontend/
│── public/                   # Chứa các file tĩnh như index.html, favicon, logo
│── src/                      # Source code chính của ứng dụng
│   ├── assets/               # Chứa hình ảnh, font, icon, CSS global
│   ├── components/           # Các component dùng chung
│   ├── layouts/              # Các layout chính (MainLayout, AuthLayout, AdminLayout)
│   ├── pages/                # Chứa các trang chính
│   │   ├── Home/             # Trang chủ
│   │   ├── JobList/          # Danh sách việc làm
│   │   ├── JobDetail/        # Chi tiết công việc
│   │   ├── Profile/          # Trang hồ sơ ứng viên
│   │   ├── Login/            # Trang đăng nhập
│   │   ├── Register/         # Trang đăng ký
│   │   ├── Admin/            # Trang dành cho admin
│   │   └── NotFound/         # Trang 404
│   ├── services/             # Chứa các API call (jobService.js, authService.js, userService.js)
│   ├── hooks/                # Custom hooks (useAuth, useJobFilter, useFetch)
│   ├── context/              # Context API (AuthContext, JobContext)
│   ├── redux/                # Nếu dùng Redux (store, slices, reducers, actions)
│   ├── routes/               # Định tuyến của ứng dụng
│   ├── utils/                # Chứa các hàm tiện ích chung
│   ├── styles/               # Chứa các file CSS, SCSS, Tailwind config
│   ├── App.js                # File chính của ứng dụng
│   ├── main.jsx              # File render chính (dùng với React 18+)
│   └── index.js              # Entry point chính
│── .env                      # Chứa biến môi trường
│── package.json              # File cấu hình npm packages
│── tailwind.config.js        # Cấu hình TailwindCSS (nếu có)
│── vite.config.js            # Cấu hình Vite (nếu dùng Vite thay vì CRA)
│── README.md                 # Hướng dẫn sử dụng dự án
