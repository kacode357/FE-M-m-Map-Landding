"use client"

import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-mam-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-mam-yellow rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-mam-orange to-mam-yellow rounded-full mr-3 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <h3 className="font-baloo text-4xl font-bold text-mam-orange">Măm Map</h3>
            </div>
            <p className="font-comfortaa text-gray-300 text-lg mb-6 mt-4 max-w-md">
              Cộng đồng review quán ăn chuẩn vị Việt. Kết nối thực khách và chủ quán thông qua công nghệ AI tiên tiến,
              mang đến trải nghiệm ẩm thực tuyệt vời nhất.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "Youtube" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-mam-orange/20 hover:bg-mam-orange rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-comfortaa font-bold text-xl mb-6 text-mam-yellow">Liên kết nhanh</h4>
            <ul className="space-y-3">
              {[
                { label: "Cách hoạt động", href: "#how-it-works" },
                { label: "Tính năng", href: "#features" },
                { label: "Ảnh chụp màn hình", href: "#screenshots" },
                { label: "Đánh giá", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
                { label: "Hướng dẫn sử dụng", href: "#" },
                { label: "Blog", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-comfortaa text-gray-300 hover:text-mam-orange transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-mam-orange rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-comfortaa font-bold text-xl mb-6 text-mam-yellow">Liên hệ</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-mam-orange mt-1 flex-shrink-0" />
                <div>
                  <div className="font-comfortaa text-gray-300 mb-1">Email hỗ trợ</div>
                  <a
                    href="mailto:mammapday@gmail.com"
                    className="font-comfortaa text-white hover:text-mam-orange transition-colors duration-300"
                  >
                    mammapday@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-mam-orange mt-1 flex-shrink-0" />
                <div>
                  <div className="font-comfortaa text-gray-300 mb-1">Hotline</div>
                  <a
                    href="tel:1900123456"
                    className="font-comfortaa text-white hover:text-mam-orange transition-colors duration-300"
                  >
                    1900 123 456
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-mam-orange mt-1 flex-shrink-0" />
                <div>
                  <div className="font-comfortaa text-gray-300 mb-1">Địa chỉ</div>
                  <span className="font-comfortaa text-white">
                    123 Đường ABC, Quận 1
                    <br />
                    TP.HCM, Việt Nam
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="text-center">
            <h4 className="font-baloo text-2xl font-bold text-white mb-4">Tải Măm Map ngay hôm nay</h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-mam-orange hover:bg-orange-600 text-white font-comfortaa font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Tải cho Người dùng
              </button>
              <button className="bg-mam-yellow hover:bg-yellow-400 text-gray-800 font-comfortaa font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Tải cho Chủ quán
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-comfortaa text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Măm Map. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {["Điều khoản sử dụng", "Chính sách bảo mật", "Chính sách cookie", "Liên hệ quảng cáo"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-comfortaa text-gray-400 hover:text-mam-orange text-sm transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
