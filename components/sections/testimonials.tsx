'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    quote:
      "Working with EthioTech transformed our business operations. Their team delivered a custom ERP solution that exceeded our expectations. The attention to detail and commitment to quality is unmatched.",
    company: 'Ethiopian Airlines',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
  },
  {
    quote:
      "EthioTech's AI solutions have streamlined our customer service operations significantly. The team's expertise and professionalism made the entire implementation seamless.",
    company: 'Commercial Bank of Ethiopia',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
  },
  {
    quote:
      "We partnered with EthioTech for our mobile app development and couldn't be happier. They delivered on time, within budget, and the quality exceeded our expectations.",
    company: 'Safari Express',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
  },
  {
    quote:
      "EthioTech's machine learning capabilities have revolutionized our data analytics. Their innovative approach and technical excellence set them apart from other vendors.",
    company: 'Ethio Telecom',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop',
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonials[activeIndex];

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="border-y border-border bg-surface-card px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-accent">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            What Our Client&apos;s Say
          </h2>
        </div>

        <div className="relative mt-12 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={goToPrev}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface-card text-text-secondary transition-colors hover:border-brand-accent hover:text-brand-accent"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex min-h-[280px] flex-1 flex-col items-center">
            <div className="relative h-20 w-20 overflow-hidden rounded-full grayscale">
              <Image
                src={testimonial.image}
                alt=""
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <p className="mt-6 max-w-2xl text-center text-text-secondary">
              {testimonial.quote}
            </p>
            <p className="mt-4 font-semibold text-text-primary">
              {testimonial.company}
            </p>
          </div>

          <button
            type="button"
            onClick={goToNext}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface-card text-text-secondary transition-colors hover:border-brand-accent hover:text-brand-accent"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === activeIndex
                  ? 'bg-brand-accent'
                  : 'bg-border hover:bg-border/80'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
