"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Mail, Send, CheckCircle, Gift, Bell, Zap } from "lucide-react"

export default function Newsletter() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setIsSubscribed(true)
    setEmail("")
  }

  const benefits = [
    {
      icon: Gift,
      title: "Ưu đãi độc quyền",
      description: "Nhận mã giảm giá và khuyến mãi đặc biệt từ các quán ăn",
    },
    {
      icon: Bell,
      title: "Thông báo sớm",
      description: "Cập nhật tính năng mới và quán ăn hot nhất trước người khác",
    },
    {
      icon: Zap,
      title: "Tips & Tricks",
      description: "Mẹo sử dụng AI và tìm kiếm món ăn hiệu quả nhất",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-mam-orange via-mam-yellow to-orange-400"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <div
            className={`mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="font-baloo text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Đăng ký nhận tin từ <span className="text-yellow-200">Măm Map</span>
            </h2>
            <p className="font-comfortaa text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Không bỏ lỡ những cập nhật mới nhất, ưu đãi hấp dẫn và mẹo hay từ cộng đồng Măm Map
            </p>
          </div>

          {/* Benefits */}
          <div
            className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-comfortaa font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="font-comfortaa text-white/80 text-sm">{benefit.description}</p>
                </div>
              )
            })}
          </div>

          {/* Newsletter Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                  <div className="flex">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Nhập email của bạn..."
                        className="w-full bg-transparent text-white placeholder-white/60 pl-12 pr-4 py-4 focus:outline-none font-comfortaa"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-white text-mam-orange hover:bg-gray-100 font-comfortaa font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-mam-orange border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
                <p className="font-comfortaa text-white/70 text-sm mt-4">
                  Chúng tôi tôn trọng quyền riêng tư của bạn. Hủy đăng ký bất cứ lúc nào.
                </p>
              </form>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-md mx-auto">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="font-baloo text-2xl font-bold text-white mb-2">Đăng ký thành công!</h3>
                <p className="font-comfortaa text-white/80">
                  Cảm ơn bạn đã đăng ký. Chúng tôi sẽ gửi những thông tin hữu ích nhất đến email của bạn.
                </p>
              </div>
            )}
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {[
              { number: "15K+", label: "Người đăng ký" },
              { number: "98%", label: "Tỷ lệ hài lòng" },
              { number: "2x", label: "Tần suất gửi/tuần" },
              { number: "24h", label: "Hỗ trợ nhanh" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-baloo text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="font-comfortaa text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
