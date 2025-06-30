"use client"

import { useState, useEffect, useRef } from "react"
import { Plus, Minus, MessageCircle, Shield, Smartphone, CreditCard } from "lucide-react"

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false)
  const [openItems, setOpenItems] = useState<number[]>([0])
  const sectionRef = useRef<HTMLElement>(null)

  const faqData = [
    {
      category: "Chung",
      icon: MessageCircle,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      questions: [
        {
          question: "Măm Map là gì?",
          answer:
            "Măm Map là ứng dụng review quán ăn thông minh dành cho người Việt. Chúng tôi sử dụng công nghệ AI để giúp người dùng tìm kiếm món ăn phù hợp và hỗ trợ chủ quán quảng bá hiệu quả.",
        },
        {
          question: "Măm Map có miễn phí không?",
          answer:
            "Có, Măm Map hoàn toàn miễn phí cho cả người dùng và chủ quán. Chúng tôi cam kết mang đến dịch vụ chất lượng cao mà không tính phí.",
        },
        {
          question: "Măm Map hoạt động ở những khu vực nào?",
          answer:
            "Hiện tại Măm Map đang hoạt động tại các thành phố lớn như Hà Nội, TP.HCM, Đà Nẵng, Cần Thơ và đang mở rộng ra các tỉnh thành khác.",
        },
      ],
    },
    {
      category: "Người dùng",
      icon: Smartphone,
      color: "text-green-600",
      bgColor: "bg-green-50",
      questions: [
        {
          question: "Làm thế nào để AI hiểu sở thích của tôi?",
          answer:
            "AI của Măm Map học hỏi từ lịch sử tìm kiếm, đánh giá và tương tác của bạn. Càng sử dụng nhiều, AI càng hiểu rõ sở thích và đưa ra gợi ý chính xác hơn.",
        },
        {
          question: "Tôi có thể tìm quán ăn theo ngân sách không?",
          answer:
            "Có, bạn có thể hỏi AI về quán ăn theo mức giá mong muốn. Ví dụ: 'Tìm quán cơm dưới 50k gần đây' hoặc 'Quán ăn sang trọng cho hẹn hò'.",
        },
        {
          question: "Làm sao để đánh giá quán ăn?",
          answer:
            "Sau khi ghé thăm quán, bạn có thể đánh giá bằng cách chấm sao (1-5), viết nhận xét và đăng ảnh món ăn. Đánh giá của bạn sẽ giúp cộng đồng có thêm thông tin hữu ích.",
        },
      ],
    },
    {
      category: "Chủ quán",
      icon: CreditCard,
      color: "text-mam-orange",
      bgColor: "bg-orange-50",
      questions: [
        {
          question: "AI tạo ảnh món ăn hoạt động như thế nào?",
          answer:
            "Bạn chỉ cần mô tả món ăn hoặc upload ảnh thật, AI sẽ tạo ra những hình ảnh chuyên nghiệp, hấp dẫn để sử dụng trong quảng bá. Công nghệ AI của chúng tôi được huấn luyện đặc biệt cho món ăn Việt Nam.",
        },
        {
          question: "Tôi có thể quản lý nhiều chi nhánh không?",
          answer:
            "Có, Măm Map hỗ trợ quản lý nhiều chi nhánh trong một tài khoản. Bạn có thể theo dõi đánh giá, doanh thu và khách hàng của từng chi nhánh một cách riêng biệt.",
        },
        {
          question: "Làm thế nào để tăng độ hiển thị của quán?",
          answer:
            "Hãy cập nhật thông tin quán đầy đủ, sử dụng AI tạo ảnh đẹp, phản hồi đánh giá khách hàng nhanh chóng và duy trì chất lượng phục vụ tốt. Măm Map sẽ tự động đề xuất quán của bạn cho người dùng phù hợp.",
        },
      ],
    },
    {
      category: "Bảo mật",
      icon: Shield,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      questions: [
        {
          question: "Thông tin cá nhân của tôi có được bảo mật không?",
          answer:
            "Măm Map cam kết bảo vệ thông tin cá nhân của người dùng theo tiêu chuẩn quốc tế. Chúng tôi sử dụng mã hóa SSL và không chia sẻ thông tin với bên thứ ba mà không có sự đồng ý.",
        },
        {
          question: "Tôi có thể xóa tài khoản không?",
          answer:
            "Có, bạn có thể xóa tài khoản bất cứ lúc nào trong phần Cài đặt. Tất cả dữ liệu cá nhân sẽ được xóa vĩnh viễn khỏi hệ thống của chúng tôi.",
        },
        {
          question: "Măm Map có thu thập dữ liệu vị trí không?",
          answer:
            "Chúng tôi chỉ thu thập dữ liệu vị trí khi bạn cho phép và chỉ sử dụng để gợi ý quán ăn gần bạn. Bạn có thể tắt tính năng này bất cứ lúc nào.",
        },
      ],
    },
  ]

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

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const itemId = categoryIndex * 100 + questionIndex
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  return (
    <section ref={sectionRef} id="faq" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
      <div className="absolute top-20 right-20 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-baloo text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Câu hỏi <span className="text-mam-orange">thường gặp</span>
          </h2>
          <p className="font-comfortaa text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Tìm hiểu thêm về Măm Map qua những câu hỏi phổ biến nhất
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
          {faqData.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <div
                key={categoryIndex}
                className={`mb-8 transition-all duration-1000 ${isVisible ? `opacity-100 translate-y-0 delay-${(categoryIndex + 1) * 200}` : "opacity-0 translate-y-10"}`}
              >
                {/* Category Header */}
                <div
                  className={`${category.bgColor} rounded-t-2xl p-6 border-l-4 border-${category.color.replace("text-", "")}`}
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-full flex items-center justify-center mr-4`}>
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className={`font-baloo text-2xl font-bold ${category.color}`}>{category.category}</h3>
                  </div>
                </div>

                {/* Questions */}
                <div className="bg-white rounded-b-2xl shadow-lg border border-gray-100">
                  {category.questions.map((item, questionIndex) => {
                    const itemId = categoryIndex * 100 + questionIndex
                    const isOpen = openItems.includes(itemId)
                    return (
                      <div key={questionIndex} className="border-b border-gray-100 last:border-b-0">
                        <button
                          onClick={() => toggleItem(categoryIndex, questionIndex)}
                          className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between"
                        >
                          <span className="font-comfortaa font-semibold text-gray-800 pr-4">{item.question}</span>
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                              isOpen ? `${category.color.replace("text-", "bg-")}/10` : "bg-gray-100"
                            }`}
                          >
                            {isOpen ? (
                              <Minus className={`w-4 h-4 ${category.color}`} />
                            ) : (
                              <Plus className="w-4 h-4 text-gray-600" />
                            )}
                          </div>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-6 pb-6">
                            <p className="font-comfortaa text-gray-600 leading-relaxed">{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact Support */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gradient-to-r from-mam-orange to-mam-yellow rounded-2xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto">
            <h3 className="font-baloo text-3xl font-bold text-white mb-4">Vẫn còn thắc mắc?</h3>
            <p className="font-comfortaa text-white/90 mb-6">
              Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ bạn 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-mam-orange hover:bg-gray-100 font-comfortaa font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Liên hệ hỗ trợ
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-mam-orange font-comfortaa font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Gửi phản hồi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
