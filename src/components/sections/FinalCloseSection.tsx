import React from 'react'
import { Section } from '../Section'
import { Button } from '../Button'

interface FinalCloseSectionProps {
  onPrimaryCTA: () => void
  onSecondaryCTA: () => void
}

export const FinalCloseSection: React.FC<FinalCloseSectionProps> = ({ onPrimaryCTA, onSecondaryCTA }) => {
  return (
    <Section id="contact" className="relative py-20 md:py-28 bg-navy overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Main headline */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-6 md:mb-8 leading-tight">
          Let's start with <span className="cursive-keyword">clarity</span>.
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto font-light mb-10 md:mb-12">
          Your journey to confident, purposeful admissions begins here.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={onPrimaryCTA} variant="primary">
            Book a Discovery Call
          </Button>
          <Button onClick={onSecondaryCTA} variant="secondary">
            Request Free Evaluation
          </Button>
        </div>
      </div>
    </Section>
  )
}
