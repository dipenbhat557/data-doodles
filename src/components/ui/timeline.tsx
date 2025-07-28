import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const Timeline = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    icon: string
    highlight: string
  }[]
  className?: string
}) => {
  return (
    <div className={cn("relative space-y-8", className)}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative pl-8"
        >
          <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-primary/20 to-primary/0" />
          <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-primary transform -translate-x-1/2" />
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
            <div className="bg-primary/5 rounded-lg px-3 py-1 text-sm text-primary font-medium mb-4 inline-block">
              {item.highlight}
            </div>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 