"use client"

import { useState, useEffect, useRef } from "react"
import { Smartphone, Users, Star, ArrowRight, Play, CheckCircle } from "lucide-react"

export default function DownloadComponent() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("user")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Hàm xử lý khi bấm tải cho người dùng
  const handleDownloadUser = () => {
    console.log("Đang tải APK cho người dùng...")
    window.location.href = "https://github.com/kacode357/downloadapk/releases/download/testdownloadapk/Mam.Map.2.0.6.apk" // Link APK người dùng
  }

  // Hàm xử lý khi bấm tải cho chủ quán
  const handleDownloadMerchant = () => {
    console.log("Đang tải APK cho chủ quán...")
    window.location.href = "https://github.com/kacode357/downloadapk/releases/download/testdownloadapk/Merchant.2.0.6.apk" // Link APK chủ quán
  }

  const userFeatures = [
    "🤖 AI Chatbot thông minh",
    "📍 Tìm quán theo vị trí",
    "⭐ Review chuẩn vị Việt",
    "🔍 Tìm kiếm nâng cao",
    "💬 Cộng đồng sôi động",
    "🎯 Gợi ý cá nhân hóa",
  ]

  const merchantFeatures = [
    "📸 AI tạo ảnh món ăn",
    "👥 Quản lý khách hàng",
    "📊 Thống kê doanh thu",
    "🚀 Tối ưu quảng bá",
    "💼 Dashboard chuyên nghiệp",
    "📈 Phân tích xu hướng",
  ]

  return (
    <section ref={sectionRef} id="download" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
      <div className="absolute top-10 left-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-baloo text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Tải <span className="text-mam-orange">Măm Map</span> ngay
          </h2>
          <p className="font-comfortaa text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Trải nghiệm ứng dụng review quán ăn thông minh nhất Việt Nam
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/20">
            <button
              onClick={() => setActiveTab("user")}
              className={`px-8 py-3 rounded-full font-comfortaa font-medium transition-all duration-300 ${
                activeTab === "user" ? "bg-mam-orange text-white shadow-lg" : "text-gray-600 hover:text-mam-orange"
              }`}
            >
              Người dùng
            </button>
            <button
              onClick={() => setActiveTab("merchant")}
              className={`px-8 py-3 rounded-full font-comfortaa font-medium transition-all duration-300 ${
                activeTab === "merchant"
                  ? "bg-mam-yellow text-gray-800 shadow-lg"
                  : "text-gray-600 hover:text-mam-orange"
              }`}
            >
              Chủ quán
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {/* User Tab */}
          {activeTab === "user" && (
            <div
              className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-comfortaa font-medium text-sm mb-4">
                      <Users className="w-4 h-4 mr-2" />
                      Dành cho Người dùng
                    </div>
                    <h3 className="font-baloo text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                      Khám phá món ngon cùng AI
                    </h3>
                    <p className="font-comfortaa text-gray-600 text-lg leading-relaxed">
                      Tìm kiếm quán ăn thông minh với AI chatbot, nhận gợi ý cá nhân hóa và kết nối với cộng đồng food
                      lover Việt Nam.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {userFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/20"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="font-comfortaa text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={handleDownloadUser}
                    className="group bg-gradient-to-r from-mam-orange to-orange-600 hover:from-orange-600 hover:to-mam-orange text-white font-comfortaa font-bold px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Smartphone className="mr-3 h-6 w-6 animate-bounce" />
                    Tải miễn phí cho Người dùng
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  {/* Stats */}
                  <div className="flex items-center space-x-6 mt-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="font-comfortaa">4.8/5 sao</span>
                    </div>
                    <div className="flex items-center">
                      <Smartphone className="w-4 h-4 text-green-500 mr-1" />
                      <span className="font-comfortaa">10K+ lượt tải</span>
                    </div>
                  </div>
                </div>

                {/* Right Content - Phone Mockup */}
                <div className="relative">
                  <div className="relative mx-auto max-w-sm">
                    {/* Phone Frame */}
                    <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                      <div className="bg-black rounded-[2.5rem] p-1">
                        <div className="bg-white rounded-[2rem] overflow-hidden relative">
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

                          {/* ẢNH CỦA USER ĐÂY NHÉ */}
                          <img
                            src="/images/userloign.jpg"
                            alt="Măm Map User App"
                            className="w-full h-[600px] object-cover"
                          />

                          {/* Floating Elements */}
                          <div className="absolute top-20 left-4 bg-mam-orange text-white px-3 py-1 rounded-full text-xs font-comfortaa animate-pulse">
                            AI đang tư vấn...
                          </div>
                          <div className="absolute bottom-20 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-comfortaa animate-bounce">
                            Tìm thấy 15 quán
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Icons */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Merchant Tab */}
          {activeTab === "merchant" && (
            <div
              className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content - Phone Mockup */}
                <div className="relative order-2 lg:order-1">
                  <div className="relative mx-auto max-w-sm">
                    {/* Phone Frame */}
                    <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                      <div className="bg-black rounded-[2.5rem] p-1">
                        <div className="bg-white rounded-[2rem] overflow-hidden relative">
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

                          {/* ẢNH CỦA CHỦ QUÁN ĐÂY NHÉ */}
                          <img
                            src="/images/loginmerchant.jpg"
                            alt="Măm Map Merchant App"
                            className="w-full h-[600px] object-cover"
                          />

                          {/* Floating Elements */}
                          <div className="absolute top-20 right-4 bg-mam-yellow text-gray-800 px-3 py-1 rounded-full text-xs font-comfortaa animate-pulse">
                            AI tạo ảnh...
                          </div>
                          <div className="absolute bottom-20 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-comfortaa animate-bounce">
                            +30% doanh thu
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Icons */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-mam-yellow rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <Smartphone className="w-6 h-6 text-gray-800" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-mam-orange rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="order-1 lg:order-2">
                  <div className="mb-8">
                    <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-comfortaa font-medium text-sm mb-4">
                      <Smartphone className="w-4 h-4 mr-2" />
                      Dành cho Chủ quán
                    </div>
                    <h3 className="font-baloo text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                      Phát triển quán ăn với AI
                    </h3>
                    <p className="font-comfortaa text-gray-600 text-lg leading-relaxed">
                      Quản lý quán ăn chuyên nghiệp với AI tạo ảnh, phân tích doanh thu và kết nối với hàng nghìn khách
                      hàng tiềm năng.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {merchantFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/20"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="font-comfortaa text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={handleDownloadMerchant}
                    className="group bg-gradient-to-r from-mam-yellow to-yellow-500 hover:from-yellow-500 hover:to-mam-yellow text-gray-800 font-comfortaa font-bold px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Smartphone className="mr-3 h-6 w-6 animate-bounce" />
                    Tải miễn phí cho Chủ quán
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  {/* Stats */}
                  <div className="flex items-center space-x-6 mt-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="font-comfortaa">4.9/5 sao</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-blue-500 mr-1" />
                      <span className="font-comfortaa">2K+ chủ quán</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="font-baloo text-3xl md:text-4xl font-bold text-white mb-4">Sẵn sàng trải nghiệm Măm Map?</h3>
            <p className="font-comfortaa text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Tham gia cộng đồng hàng nghìn người dùng và chủ quán đang tin tưởng sử dụng Măm Map mỗi ngày
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDownloadUser}
                className="bg-mam-orange hover:bg-orange-600 text-white font-comfortaa font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Người dùng
              </button>
              <button
                onClick={handleDownloadMerchant}
                className="bg-mam-yellow hover:bg-yellow-400 text-gray-800 font-comfortaa font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Chủ quán
              </button>
            </div>

            {/* Demo Video */}
            <div className="mt-8">
              <button className="group flex items-center justify-center mx-auto text-gray-300 hover:text-white transition-colors duration-300">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mr-3 group-hover:scale-110">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                <div className="text-left">
                  <div className="font-comfortaa font-medium">Xem video hướng dẫn</div>
                  <div className="font-comfortaa text-sm text-gray-400">3 phút giới thiệu chi tiết</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}