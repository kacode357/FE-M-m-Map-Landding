"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, Camera, MapPin, Star, Users, Sparkles, Download } from "lucide-react"

export default function Features() {
  const [isVisible, setIsVisible] = useState(false)
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

  const handleDownloadUser = () => {
    alert("Đang chuẩn bị link tải APK cho Người dùng...")
  }

  const handleDownloadMerchant = () => {
    alert("Đang chuẩn bị link tải APK cho Chủ quán...")
  }

  const userFeatures = [
    {
      icon: MessageCircle,
      title: "Chatbot AI thông minh",
      description: "Hỏi AI về món ăn, địa điểm, đánh giá quán ăn theo khu vực",
      delay: "delay-100",
    },
    {
      icon: MapPin,
      title: "Tìm quán theo vị trí",
      description: "Khám phá các quán ăn ngon gần bạn với gợi ý cá nhân hóa",
      delay: "delay-200",
    },
    {
      icon: Star,
      title: "Review chuẩn vị Việt",
      description: "Giao diện hoàn toàn tiếng Việt, tối ưu cho người Việt",
      delay: "delay-300",
    },
  ]

  const merchantFeatures = [
    {
      icon: Camera,
      title: "AI tạo ảnh món ăn",
      description: "Tạo ảnh món ăn hấp dẫn bằng AI để quảng bá quán hiệu quả",
      delay: "delay-100",
    },
    {
      icon: Users,
      title: "Quản lý khách hàng",
      description: "Theo dõi đánh giá, phản hồi khách hàng một cách chuyên nghiệp",
      delay: "delay-200",
    },
    {
      icon: Sparkles,
      title: "Tối ưu quảng bá",
      description: "Công cụ marketing thông minh giúp thu hút khách hàng mới",
      delay: "delay-300",
    },
  ]

  return (
    <section ref={sectionRef} id="features" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-yellow-50/50"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-mam-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-mam-yellow/10 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-baloo text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Tính năng <span className="text-mam-orange">nổi bật</span>
          </h2>
          <p className="font-comfortaa text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá những tính năng độc đáo giúp bạn tìm kiếm và quảng bá quán ăn hiệu quả
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* User Section */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 p-8 lg:p-10 border border-white/20 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-mam-orange/20 to-transparent rounded-full blur-2xl"></div>

              <div className="text-center mb-10">
                <div className="w-40 h-40 mx-auto mb-8 bg-gradient-to-br from-mam-orange to-orange-600 rounded-full flex items-center justify-center shadow-2xl relative">
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                    <MessageCircle className="h-16 w-16 text-mam-orange" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-mam-yellow rounded-full animate-ping"></div>
                </div>
                <h3 className="font-baloo text-4xl font-bold text-mam-orange mb-4">Dành cho Người dùng</h3>
                <p className="font-comfortaa text-gray-600">Trải nghiệm tìm kiếm quán ăn thông minh</p>
              </div>

              <div className="space-y-6 mb-10">
                {userFeatures.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div
                      key={index}
                      className={`flex items-start space-x-4 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${isVisible ? `animate-fade-in-up ${feature.delay}` : "opacity-0"}`}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-mam-orange rounded-full flex items-center justify-center shadow-lg">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-comfortaa font-bold text-gray-800 mb-2 text-lg">{feature.title}</h4>
                        <p className="font-comfortaa text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <button
                onClick={handleDownloadUser}
                className="group w-full bg-gradient-to-r from-mam-orange to-orange-600 hover:from-orange-600 hover:to-mam-orange text-white font-comfortaa font-bold py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Download className="mr-3 h-5 w-5 animate-bounce" />
                Tải ngay cho Người dùng
              </button>
            </div>
          </div>

          {/* Merchant Section */}
          <div
            className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 p-8 lg:p-10 border border-white/20 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-mam-yellow/20 to-transparent rounded-full blur-2xl"></div>

              <div className="text-center mb-10">
                <div className="w-40 h-40 mx-auto mb-8 bg-gradient-to-br from-mam-yellow to-yellow-500 rounded-full flex items-center justify-center shadow-2xl relative">
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                    <Camera className="h-16 w-16 text-mam-yellow" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-mam-orange rounded-full animate-ping"></div>
                </div>
                <h3 className="font-baloo text-4xl font-bold text-mam-yellow mb-4">Dành cho Chủ quán</h3>
                <p className="font-comfortaa text-gray-600">Công cụ quảng bá quán ăn hiệu quả</p>
              </div>

              <div className="space-y-6 mb-10">
                {merchantFeatures.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div
                      key={index}
                      className={`flex items-start space-x-4 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${isVisible ? `animate-fade-in-up ${feature.delay}` : "opacity-0"}`}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-mam-yellow rounded-full flex items-center justify-center shadow-lg">
                          <IconComponent className="h-6 w-6 text-gray-800" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-comfortaa font-bold text-gray-800 mb-2 text-lg">{feature.title}</h4>
                        <p className="font-comfortaa text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <button
                onClick={handleDownloadMerchant}
                className="group w-full bg-gradient-to-r from-mam-yellow to-yellow-500 hover:from-yellow-500 hover:to-mam-yellow text-gray-800 font-comfortaa font-bold py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Download className="mr-3 h-5 w-5 animate-bounce" />
                Tải ngay cho Chủ quán
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
