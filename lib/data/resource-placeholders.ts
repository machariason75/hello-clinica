/**
 * Placeholder "planned topics" for Free Resources categories that don't yet
 * hold any published guides. They render as muted, non-interactive cards so an
 * empty category still looks intentional and tells visitors (and the admin)
 * what's coming. The moment a real resource is published under a category, the
 * category page shows the real guides instead and these disappear automatically
 * — nothing here needs to be removed by hand.
 *
 * Keyed by the category slug (see lib/data/resource-categories.ts).
 */
export type PlaceholderTopic = { title: string; description: string };

export const resourcePlaceholders: Record<string, PlaceholderTopic[]> = {
  admissions: [
    { title: "What Admissions Committees Look For", description: "The qualities and signals selective programs weigh most." },
    { title: "Building a Balanced School List", description: "Reach, target, and safety schools that fit your profile." },
    { title: "GPA & Test-Score Positioning", description: "Framing your academics honestly and to your advantage." },
    { title: "Letters of Recommendation", description: "Who to ask, when to ask, and how to make it easy for them." },
  ],
  "application-timeline": [
    { title: "12–18 Month Prep Calendar", description: "A month-by-month runway from first steps to submission." },
    { title: "The Primary Application Window", description: "When to open, complete, and submit for the best position." },
    { title: "Secondary Turnaround Plan", description: "Keeping pace with secondaries without burning out." },
    { title: "Interview & Decision Season", description: "What to expect from invitations through final decisions." },
  ],
  "personal-statement-guide": [
    { title: "Choosing Your Core Story", description: "Finding the throughline that makes your essay yours." },
    { title: "The Show-Don't-Tell Framework", description: "Turning claims into concrete, memorable moments." },
    { title: "Common Opening Mistakes", description: "Traps that flatten a strong story — and how to avoid them." },
    { title: "Editing & Feedback Loops", description: "A revision process that sharpens without losing your voice." },
  ],
  "interview-guide": [
    { title: "Traditional vs MMI Formats", description: "How each format works and what it rewards." },
    { title: "Answering 'Why Medicine?'", description: "A sincere, specific response that avoids clichés." },
    { title: "Ethical Scenario Practice", description: "Reasoning out loud through common ethical prompts." },
    { title: "Questions to Ask Your Interviewers", description: "Thoughtful questions that show genuine interest and fit." },
  ],
  "clinical-experience": [
    { title: "Finding Clinical Exposure", description: "Where to look for scribing, assisting, and volunteering roles." },
    { title: "Scribing vs Volunteering", description: "What each offers and how they strengthen an application." },
    { title: "Reflecting on Patient Encounters", description: "Turning hours into insight admissions committees value." },
    { title: "Logging Hours Effectively", description: "A simple, dated record that makes applications easier." },
  ],
  "volunteer-guide": [
    { title: "Choosing Meaningful Service", description: "Causes you care about that also show sustained commitment." },
    { title: "Clinical vs Non-Clinical Service", description: "How both count and where each fits your story." },
    { title: "Sustained Commitment", description: "Why depth over time beats scattered short stints." },
    { title: "Tracking Your Impact", description: "Keeping records that support your reflections later." },
  ],
  "shadowing-guide": [
    { title: "Requesting a Shadowing Spot", description: "Outreach that gets a yes — templates and etiquette." },
    { title: "Professionalism & Patient Privacy", description: "Conducting yourself well in a clinical setting." },
    { title: "Specialties Worth Seeing", description: "Getting a broad view before you narrow your interests." },
    { title: "Reflection After Shadowing", description: "Capturing what you learned while it's fresh." },
  ],
  "study-resources": [
    { title: "Active Recall & Spaced Repetition", description: "The two techniques with the strongest evidence behind them." },
    { title: "Weekly Study Blocks", description: "Planning consistent, sustainable study time." },
    { title: "Standardized Exam Prep", description: "Approaching the MCAT, NCLEX, and similar exams." },
    { title: "Recommended Tools", description: "Apps and systems that support focused study." },
  ],
  "career-exploration": [
    { title: "Comparing Healthcare Paths", description: "Training length, scope, and daily work across professions." },
    { title: "MD vs DO vs PA vs Nursing", description: "Honest differences to help you choose with clarity." },
    { title: "Talking to Professionals", description: "Questions that reveal what a path is really like." },
    { title: "When to Change Paths", description: "Recognizing a better fit — and how skills transfer." },
  ],
};

export function getPlaceholderTopics(slug: string): PlaceholderTopic[] {
  return resourcePlaceholders[slug] ?? [];
}
