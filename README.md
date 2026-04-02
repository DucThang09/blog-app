NextJS Blog Learning Platform
Dự án Blog cá nhân và Portfolio được xây dựng trên nền tảng Next.js (App Router) với thiết kế thân thiện, tối giản và tối ưu hóa hiệu suất (SEO, SSG/SSR).

Live Demo : https://blog-app-six-zeta-50.vercel.app/
Mô tả chi tiết : https://docs.google.com/document/d/15Xzsl9AZSJcHNa1N2aQGimKI8iNl5XE_/edit?usp=sharing&ouid=105471340210228464438&rtpof=true&sd=true
Công Nghệ (Tech Stack)
Core: Next.js 14, React 22, TypeScript.
UI/Styling: Tailwind CSS, Lucide React.
Cấu Trúc Dự Án (Project Tree)
blognextjs/
├── app/                              # Next.js App Router (Routing logic)
│   ├── (marketing)/                  # Group Layout: Trang tĩnh
│   │   ├── about/
│   │   │   └── page.tsx              # Giới thiệu bản thân
│   │   ├── contact/
│   │   │   └── page.tsx              # Form liên hệ
│   │   └── page.tsx                  # Trang chủ (Portfolio & Latest Posts)
│   ├── api/
│   │   └── contact/
│   │       └── route.ts              # API Route xử lý nhận form liên hệ
│   ├── blog/                         # Sub-route Blog chính
│   │   ├── [slug]/                   # Trang xem chi tiết bài viết (SSG, SEO)
│   │   │   ├── @comments/            # Parallel Route (Demo)
│   │   │   │   └── default.tsx
│   │   │   ├── loading.tsx           # Skeleton cho riêng bài viết
│   │   │   └── page.tsx              
│   │   ├── category/                 # Bộ lọc Blog theo danh mục
│   │   │   └── [category]/
│   │   │       └── page.tsx          
│   │   ├── error.tsx                 # Error Boundary cấp cục bộ (Blog)
│   │   └── page.tsx                  # Danh sách toàn bộ bài viết
│   ├── error.tsx                     # Error Boundary cấp Root (Global Error)
│   ├── globals.css                   # File CSS định dạng Root Tailwind
│   ├── layout.tsx                    # Root Layout chứa Header, Navigation, Footer
│   ├── loading.tsx                   # Loading Skeleton cấp Root (Spinkit)
│   └── not-found.tsx                 # Custom 404 Page Error Handling
├── components/                       # Shared UI Components
│   ├── blog/                         # Chứa Component riêng cho Logic Blog
│   │   ├── PostCard.tsx
│   │   └── PostList.tsx
│   ├── forms/                        # Chứa các Component Form Input nghiệp vụ
│   │   ├── CommentForm.tsx           # Xử lý nhập Bình luận thực tế (Optimistic Update)
│   │   └── ContactForm.tsx
│   ├── layout/                       # Thành phần dùng chung toàn cục thiết kế
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Navigation.tsx
│   └── ui/                           # Thành phần nguyên tử UI tái sử dụng
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       └── Textarea.tsx
├── data/                             # Mock Database
│   └── posts.json                    # Nguồn file giả lập dữ liệu tĩnh Database
├── lib/                              # Helper & Core Logic
│   ├── api.ts                        # Logic query JSON (getPosts, filters)
│   ├── utils.ts                      # Hàm format/dựng utilities string, class tailwind 
│   └── validations.ts                # Khởi tạo form schema Zod rules để validate dữ liệu
├── types/
│   └── index.ts                      # Nơi định hình Typescript Interfaces (Post, Category)
├── public/                           # Chứa hình ảnh tĩnh, phông chữ, v.v
├── next.config.js                    # File cấu hình Nextjs (như định tuyến Image hostname)
├── package.json                      # Quản lý dependencies
├── postcss.config.mjs                # Thiết lập công cụ Postcss xử lý Tailwind V3
├── tailwind.config.ts                # Định cấu hình class cho TailwindCSS
└── tsconfig.json                     # Typescript configuration rules
