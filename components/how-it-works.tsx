"use client"

import { useState, useEffect, useRef } from "react"
import { Smartphone, MessageCircle, MapPin, Camera, Users, TrendingUp, ArrowRight } from "lucide-react"

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 6)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  const userSteps = [
    {
      icon: Smartphone,
      title: "Tải ứng dụng",
      description: "Tải Măm Map miễn phí từ cửa hàng ứng dụng",
      color: "bg-blue-500",
    },
    {
      icon: MessageCircle,
      title: "Trò chuyện với AI",
      description: "Hỏi AI về món ăn, địa điểm theo sở thích",
      color: "bg-green-500",
    },
    {
      icon: MapPin,
      title: "Tìm quán gần bạn",
      description: "Khám phá các quán ăn ngon trong khu vực",
      color: "bg-purple-500",
    },
  ]

  const merchantSteps = [
    {
      icon: Camera,
      title: "Tạo ảnh AI",
      description: "Sử dụng AI tạo ảnh món ăn chuyên nghiệp",
      color: "bg-mam-orange",
    },
    {
      icon: Users,
      title: "Quản lý khách hàng",
      description: "Theo dõi và phản hồi đánh giá khách hàng",
      color: "bg-mam-yellow",
    },
    {
      icon: TrendingUp,
      title: "Tăng doanh thu",
      description: "Thu hút khách hàng mới và tăng doanh số",
      color: "bg-red-500",
    },
  ]

  return (
    <section ref={sectionRef} id="how-it-works" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30"></div>
      <div className="absolute top-20 left-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4">
        {/* Section Title */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-baloo text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Cách <span className="text-mam-orange">Măm Map</span> hoạt động
          </h2>
          <p className="font-comfortaa text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Quy trình đơn giản 3 bước để bắt đầu trải nghiệm tuyệt vời với Măm Map
          </p>
        </div>

        {/* For Users */}
        <div className="mb-20">
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="font-baloo text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Dành cho <span className="text-blue-600">Người dùng</span>
            </h3>
            <p className="font-comfortaa text-gray-600">Tìm kiếm và khám phá quán ăn ngon</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {userSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 ${isVisible ? `opacity-100 translate-y-0 delay-${(index + 1) * 100}` : "opacity-0 translate-y-10"}`}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 relative overflow-hidden">
                    {/* Step Number */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-gray-600 text-sm">{index + 1}</span>
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h4 className="font-comfortaa font-bold text-xl text-gray-800 mb-3">{step.title}</h4>
                    <p className="font-comfortaa text-gray-600 leading-relaxed">{step.description}</p>

                    {/* Arrow */}
                    {index < userSteps.length - 1 && (
                      <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                        <ArrowRight className="w-8 h-8 text-gray-300" />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* For Merchants */}
        <div>
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="font-baloo text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Dành cho <span className="text-mam-orange">Chủ quán</span>
            </h3>
            <p className="font-comfortaa text-gray-600">Quảng bá và phát triển quán ăn của bạn</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {merchantSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 ${isVisible ? `opacity-100 translate-y-0 delay-${(index + 7) * 100}` : "opacity-0 translate-y-10"}`}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 relative overflow-hidden">
                    {/* Step Number */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-gray-600 text-sm">{index + 1}</span>
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h4 className="font-comfortaa font-bold text-xl text-gray-800 mb-3">{step.title}</h4>
                    <p className="font-comfortaa text-gray-600 leading-relaxed">{step.description}</p>

                    {/* Arrow */}
                    {index < merchantSteps.length - 1 && (
                      <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                        <ArrowRight className="w-8 h-8 text-gray-300" />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gradient-to-r from-mam-orange to-mam-yellow rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="font-baloo text-3xl md:text-4xl font-bold text-white mb-4">Sẵn sàng bắt đầu với Măm Map?</h3>
            <p className="font-comfortaa text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Tham gia cộng đồng hàng nghìn người dùng và chủ quán đang sử dụng Măm Map mỗi ngày
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-mam-orange hover:bg-gray-100 font-comfortaa font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                Tải cho Người dùng
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-mam-orange font-comfortaa font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
                Tải cho Chủ quán
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
