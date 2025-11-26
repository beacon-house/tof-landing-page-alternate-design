import React from 'react'
import { Section } from '../Section'
import { Button } from '../Button'

interface FinalCloseSectionProps {
  onCTA: () => void
}

export const FinalCloseSection: React.FC<FinalCloseSectionProps> = ({ onCTA }) => {
  return (
    <Section id="contact" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Main headline */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-navy mb-6 md:mb-8 leading-tight">
          Let's start with <span className="cursive-keyword">clarity</span>.
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-navy/70 leading-relaxed max-w-2xl mx-auto font-light mb-10 md:mb-12">
          Your journey to confident, purposeful admissions begins here.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button onClick={onCTA} variant="primary">
            Request an Evaluation
          </Button>
        </div>
      </div>
    </Section>
  )
}
