// Section D - What We Help Families Do section
import React from 'react'
import { Section } from '../Section'
import { Button } from '../Button'

const benefits = [
  {
    title: 'What actually matters vs what\'s noise',
    description: 'So you stop guessing.',
    icon: '🎯'
  },
  {
    title: 'What to do in each grade (8–12)',
    description: 'Know exactly what matters each year — with no confusion.',
    icon: '📅'
  },
  {
    title: 'How interests become real pathways',
    description: 'From "they like many things" → "this direction makes sense."',
    icon: '🧭'
  },
  {
    title: 'How admissions teams think at every stage',
    description: 'So your child\'s choices align with what colleges actually value.',
    icon: '🎓'
  },
  {
    title: 'What to ignore completely',
    description: 'So your child isn\'t pulled into unnecessary pressure.',
    icon: '✨'
  },
  {
    title: 'How to build direction with busy schedules',
    description: 'Sports, school load, multiple interests — balanced.',
    icon: '⚖️'
  },
  {
    title: 'How strengths turn into depth + impact',
    description: 'The base of a strong college story.',
    icon: '🚀'
  }
]

export const BridgeSection: React.FC<{ onCTAClick: () => void }> = ({ onCTAClick }) => {
  return (
    <Section id="bridge" className="relative py-10 md:py-12 flex items-center bg-white">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-5 md:mb-7 max-w-3xl mx-auto">


          <h2 className="font-serif text-xl md:text-2xl lg:text-3xl text-navy mb-4 leading-tight font-bold">
            Here's exactly how we guide you:
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-gold to-goldLight rounded-full mx-auto"></div>
        </div>

        {/* Benefits - Mobile: Horizontal Carousel, Desktop: Grid */}
        {/* Mobile Carousel */}
        <div className="md:hidden mb-8">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 scrollbar-hide">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85%] snap-start group p-4 bg-gradient-to-br from-cream to-sage rounded-2xl border border-gold/10 shadow-sm"
              >
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-base font-bold text-navy mb-2 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {benefits.slice(0, 5).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-gold/30"></div>
            ))}
          </div>
        </div>

        {/* Desktop Grid/Flex for better centering of 7 items */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-4 md:p-5 bg-gradient-to-br from-cream to-sage rounded-2xl border border-gold/10 shadow-sm hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 w-[calc(50%-10px)] lg:w-[calc(25%-15px)] flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl md:text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-sm md:text-base font-bold text-navy mb-2 leading-snug">
                {benefit.title}
              </h3>
              <p className="text-xs md:text-sm text-navy/70 leading-relaxed mt-auto">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto p-6 md:p-7 bg-gradient-to-br from-navy via-navyLight to-navy rounded-3xl shadow-luxury">
          <p className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white mb-4 md:mb-5 leading-tight">
            This is where <span className="cursive-keyword">clarity</span> begins.
          </p>

          <Button
            onClick={onCTAClick}
            variant="secondary"
            className="bg-gold hover:bg-goldLight text-navy font-semibold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-xl shadow-glow hover:shadow-luxury transition-all duration-300 hover:scale-105"
          >
            Understand Our Approach
          </Button>
        </div>
      </div>
    </Section>
  )
}
