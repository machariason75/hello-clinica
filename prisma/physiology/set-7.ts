/**
 * PHYSIOLOGY — PRACTICE SET 7
 * Neurophysiology & Integrative Physiology  (capstone)
 *
 * Guyton & Hall / Ganong depth. Synaptic transmission and neurotransmitters, sensory
 * receptors and the special senses, motor systems and reflexes, the cerebellum and basal
 * ganglia, the autonomic nervous system, the spinal cord tracts, higher cortical function,
 * sleep and memory, the cerebrospinal fluid and cerebral circulation, hypothalamic
 * homeostatic integration, and whole-body integrative and clinical physiology. 100 questions.
 *
 * Options are length-matched (the correct answer is not perceptibly the longest)
 * and every distractor is a defensible near-miss. Positions randomized by engine.
 */

import type { Q } from "../_lib/qbank";

export const PHYSIOLOGY_SET_7: Q[] = [
  {
    stem: "At a chemical synapse, the arrival of an action potential triggers neurotransmitter release by admitting into the terminal:",
    topic: "Synaptic Transmission & Neurotransmitters",
    explanation:
      "Depolarization opens voltage-gated calcium channels in the presynaptic terminal, and the calcium that enters triggers fusion of transmitter vesicles with the membrane; the amount of transmitter released is therefore steeply dependent on calcium entry.",
    choices: [
      { text: "calcium ions", isCorrect: true },
      { text: "chloride ions" },
      { text: "potassium ions" },
      { text: "magnesium ions" },
    ],
  },
  {
    stem: "An excitatory postsynaptic potential is produced when the transmitter opens channels that cause:",
    topic: "Synaptic Transmission & Neurotransmitters",
    explanation:
      "An excitatory transmitter opens channels permeable to sodium and other cations, and the resulting inward current depolarizes the postsynaptic membrane toward threshold; enough such potentials summing together can bring the cell to fire.",
    choices: [
      { text: "a depolarizing cation influx", isCorrect: true },
      { text: "a hyperpolarizing chloride influx" },
      { text: "a hyperpolarizing potassium efflux" },
      { text: "no change in the membrane potential" },
    ],
  },
  {
    stem: "An inhibitory postsynaptic potential typically results from opening channels for:",
    topic: "Synaptic Transmission & Neurotransmitters",
    explanation:
      "Inhibitory transmitters such as GABA and glycine open chloride or potassium channels, driving the membrane away from threshold; this hyperpolarization, or the shunting it produces, makes the postsynaptic neuron less likely to fire.",
    choices: [
      { text: "chloride or potassium", isCorrect: true },
      { text: "sodium or calcium" },
      { text: "calcium alone" },
      { text: "sodium alone" },
    ],
  },
  {
    stem: "Temporal summation at a synapse refers to the adding together of:",
    topic: "Synaptic Transmission & Neurotransmitters",
    explanation:
      "In temporal summation, successive impulses arriving at the same synapse in quick succession produce postsynaptic potentials that overlap and add; if they arrive fast enough, their combined depolarization can reach threshold where a single one could not.",
    choices: [
      { text: "successive inputs from one synapse over time", isCorrect: true },
      { text: "simultaneous inputs from many synapses" },
      { text: "inhibitory and excitatory inputs cancelling" },
      { text: "action potentials in the axon itself" },
    ],
  },
  {
    stem: "The action of acetylcholine released at a synapse is terminated chiefly by:",
    topic: "Synaptic Transmission & Neurotransmitters",
    explanation:
      "Acetylcholinesterase in the synaptic cleft rapidly hydrolyzes acetylcholine, ending its action within milliseconds; this quick breakdown allows precise timing of signaling, and drugs that block the enzyme prolong and intensify cholinergic transmission.",
    choices: [
      { text: "breakdown by acetylcholinesterase", isCorrect: true },
      { text: "reuptake into the postsynaptic cell" },
      { text: "diffusion out of the whole body" },
      { text: "binding to plasma albumin" },
    ],
  },
  {
    stem: "The principal excitatory neurotransmitter of the central nervous system is:",
    topic: "Synaptic Transmission & Neurotransmitters",
    explanation:
      "Glutamate mediates most fast excitatory transmission in the brain and spinal cord, acting on ionotropic and metabotropic receptors; its widespread role also means that excessive glutamate signaling can be excitotoxic to neurons.",
    choices: [
      { text: "glutamate", isCorrect: true },
      { text: "GABA" },
      { text: "glycine" },
      { text: "dopamine" },
    ],
  },
  {
    stem: "The principal inhibitory neurotransmitter in the brain is:",
    topic: "Synaptic Transmission & Neurotransmitters",
    explanation:
      "GABA carries most fast inhibition in the brain, opening chloride channels to hyperpolarize or shunt the postsynaptic neuron; many sedative and anticonvulsant drugs work by enhancing this GABA-mediated inhibition.",
    choices: [
      { text: "GABA", isCorrect: true },
      { text: "glutamate" },
      { text: "acetylcholine" },
      { text: "norepinephrine" },
    ],
  },
  {
    stem: "The brief lag of about half a millisecond between presynaptic and postsynaptic activity, the synaptic delay, is due mainly to:",
    topic: "Synaptic Transmission & Neurotransmitters",
    explanation:
      "The synaptic delay reflects the time for calcium to enter, for vesicles to fuse and release transmitter, and for that transmitter to diffuse across the cleft and bind; this chemical step is slower than the near-instant transmission of an electrical synapse.",
    choices: [
      { text: "the time to release the transmitter", isCorrect: true },
      { text: "slow conduction along the whole axon" },
      { text: "the refractory period of the axon" },
      { text: "reuptake of the released transmitter" },
    ],
  },
  {
    stem: "A neurotransmitter receptor that is itself an ion channel, giving a rapid response, is described as:",
    topic: "Synaptic Transmission & Neurotransmitters",
    explanation:
      "An ionotropic receptor combines transmitter binding and an ion channel in one protein, so binding opens the channel directly and acts within a millisecond; metabotropic receptors, by contrast, act through second messengers and are slower but longer-lasting.",
    choices: [
      { text: "ionotropic", isCorrect: true },
      { text: "metabotropic" },
      { text: "adrenergic" },
      { text: "intracellular" },
    ],
  },
  {
    stem: "Which of the following are properties of chemical synapses? Select all that apply.",
    type: "MULTI",
    topic: "Synaptic Transmission & Neurotransmitters",
    explanation:
      "Chemical synapses transmit in one direction only, impose a brief synaptic delay, depend on calcium entry to release transmitter, and may be excitatory or inhibitory depending on the transmitter and receptor; they are not bidirectional and are not delay-free.",
    choices: [
      { text: "transmission is one-way only", isCorrect: true },
      { text: "there is a brief synaptic delay", isCorrect: true },
      { text: "calcium entry triggers transmitter release", isCorrect: true },
      { text: "they can be excitatory or inhibitory", isCorrect: true },
      { text: "they transmit in both directions freely" },
      { text: "they have no synaptic delay whatsoever" },
    ],
  },
  {
    stem: "True or False: Whether a neuron reaches threshold and fires depends on the summation of its excitatory and inhibitory postsynaptic potentials.",
    type: "TRUE_FALSE",
    topic: "Synaptic Transmission & Neurotransmitters",
    explanation:
      "True. A neuron continuously integrates many synaptic inputs, and only if the net depolarization at the trigger zone reaches threshold does it fire; this balance of excitation and inhibition is the basic computation performed by every neuron.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The intensity of a stimulus is encoded in a sensory nerve fiber chiefly by:",
    topic: "Sensory Systems & Receptors",
    explanation:
      "A stronger stimulus produces a larger receptor potential, which in turn generates action potentials at a higher frequency; because all action potentials are the same size, it is their firing rate, not their amplitude, that signals intensity.",
    choices: [
      { text: "the frequency of the action potentials", isCorrect: true },
      { text: "the size of each action potential" },
      { text: "the conduction velocity of the fiber" },
      { text: "the resting potential of the receptor" },
    ],
  },
  {
    stem: "Rapidly adapting, or phasic, sensory receptors are specialized to detect:",
    topic: "Sensory Systems & Receptors",
    explanation:
      "Phasic receptors fire briskly when a stimulus begins or changes but fall silent if it is maintained, making them ideal for signaling movement and change; tonic receptors, in contrast, keep firing to report a steady, ongoing stimulus.",
    choices: [
      { text: "changes in the stimulus", isCorrect: true },
      { text: "the steady level of a stimulus" },
      { text: "the exact location alone" },
      { text: "only painful stimuli" },
    ],
  },
  {
    stem: "Each type of sensory receptor responds best to one form of energy, its adequate stimulus, and the modality sensed depends on:",
    topic: "Sensory Systems & Receptors",
    explanation:
      "The brain interprets a modality according to which labeled pathway is active, not the energy that excited it; this is why pressure on the eye is seen as light, since it activates the visual line regardless of the actual stimulus.",
    choices: [
      { text: "the pathway the receptor activates", isCorrect: true },
      { text: "the strength of the applied stimulus" },
      { text: "the frequency of the firing alone" },
      { text: "the size of the receptor potential" },
    ],
  },
  {
    stem: "A sensory neuron with a small receptive field and dense innervation, as in the fingertip, provides:",
    topic: "Sensory Systems & Receptors",
    explanation:
      "Densely packed receptors with small receptive fields let the nervous system localize and discriminate fine spatial detail, giving high two-point acuity; regions such as the back, with large sparse fields, discriminate touch far more coarsely.",
    choices: [
      { text: "high spatial acuity", isCorrect: true },
      { text: "very low spatial acuity" },
      { text: "no sense of touch at all" },
      { text: "only temperature sensation" },
    ],
  },
  {
    stem: "The sharp, well-localized first pain felt immediately after an injury is carried by:",
    topic: "Sensory Systems & Receptors",
    explanation:
      "Fast-conducting, thinly myelinated A-delta fibers carry the sharp, pricking first pain that is quickly localized; the aching, poorly localized second pain that follows is carried by slower, unmyelinated C fibers.",
    choices: [
      { text: "myelinated A-delta fibers", isCorrect: true },
      { text: "unmyelinated C fibers" },
      { text: "large A-alpha motor fibers" },
      { text: "autonomic postganglionic fibers" },
    ],
  },
  {
    stem: "Pain arising from a visceral organ that is felt at a distant skin site, such as arm pain in a heart attack, is called:",
    topic: "Sensory Systems & Receptors",
    explanation:
      "Referred pain occurs because visceral and somatic afferents converge on the same spinal neurons, so the brain misattributes the visceral signal to the skin region sharing that pathway; the pattern is clinically useful for localizing visceral disease.",
    choices: [
      { text: "referred pain", isCorrect: true },
      { text: "phantom pain" },
      { text: "neuropathic pain" },
      { text: "fast first pain" },
    ],
  },
  {
    stem: "According to the gate control theory, the perception of pain can be reduced by:",
    topic: "Sensory Systems & Receptors",
    explanation:
      "Activity in large touch fibers can inhibit the transmission of pain signals at the spinal cord, effectively closing a gate; this is why rubbing an injured area eases pain, and it underlies therapies that stimulate large sensory fibers.",
    choices: [
      { text: "activity in large touch fibers", isCorrect: true },
      { text: "blocking all touch sensation" },
      { text: "increasing the C-fiber firing" },
      { text: "cutting the descending pathways" },
    ],
  },
  {
    stem: "The sense of the position and movement of the limbs, proprioception, depends heavily on receptors located in the:",
    topic: "Sensory Systems & Receptors",
    explanation:
      "Muscle spindles, tendon organs, and joint receptors continuously report muscle length, tension, and joint angle to the nervous system; this proprioceptive information is essential for coordinated movement and for standing balance without vision.",
    choices: [
      { text: "muscles, tendons, and joints", isCorrect: true },
      { text: "skin of the fingertips only" },
      { text: "retina of the eye" },
      { text: "cochlea of the inner ear" },
    ],
  },
  {
    stem: "A receptor that responds to tissue-damaging or potentially damaging stimuli is a:",
    topic: "Sensory Systems & Receptors",
    explanation:
      "Nociceptors are free nerve endings that respond to intense mechanical, thermal, or chemical stimuli signaling actual or threatened tissue damage; their activity is what the brain interprets as pain, prompting protective withdrawal and behavior.",
    choices: [
      { text: "nociceptor", isCorrect: true },
      { text: "mechanoreceptor" },
      { text: "thermoreceptor" },
      { text: "photoreceptor" },
    ],
  },
  {
    stem: "Which of the following correctly pair a receptor type with its stimulus? Select all that apply.",
    type: "MULTI",
    topic: "Sensory Systems & Receptors",
    explanation:
      "Nociceptors respond to tissue-damaging stimuli, thermoreceptors to temperature, photoreceptors to light, and mechanoreceptors to pressure or stretch; chemoreceptors respond to chemicals rather than light, and nociceptors are not activated by gentle touch.",
    choices: [
      { text: "nociceptors with tissue-damaging stimuli", isCorrect: true },
      { text: "thermoreceptors with temperature", isCorrect: true },
      { text: "photoreceptors with light", isCorrect: true },
      { text: "mechanoreceptors with pressure or stretch", isCorrect: true },
      { text: "chemoreceptors with light energy input" },
      { text: "nociceptors with a gentle light touch" },
    ],
  },
  {
    stem: "True or False: Tonic (slowly adapting) receptors continue to fire throughout a sustained stimulus, signaling its ongoing presence.",
    type: "TRUE_FALSE",
    topic: "Sensory Systems & Receptors",
    explanation:
      "True. Because they adapt little, tonic receptors keep the nervous system informed about a maintained condition, such as joint position or steady pressure; this contrasts with phasic receptors, which report mainly the onset and offset of a stimulus.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Colour vision and fine detail in bright light are mediated by the retinal:",
    topic: "Special Senses",
    explanation:
      "The cones provide colour vision and high acuity and operate in bright light, being concentrated at the fovea; the rods are far more sensitive and support vision in dim light but do not distinguish colours or fine detail.",
    choices: [
      { text: "cones", isCorrect: true },
      { text: "rods" },
      { text: "bipolar cells" },
      { text: "ganglion cells" },
    ],
  },
  {
    stem: "Unusually among sensory receptors, when light strikes a photoreceptor the cell:",
    topic: "Special Senses",
    explanation:
      "Light closes cation channels in the photoreceptor, so the cell hyperpolarizes and releases less glutamate, the opposite of most receptors; this decrease in transmitter is the signal passed to the bipolar cells and onward through the retina.",
    choices: [
      { text: "hyperpolarizes and releases less transmitter", isCorrect: true },
      { text: "depolarizes and releases more transmitter" },
      { text: "depolarizes but releases no transmitter" },
      { text: "is completely unaffected by the light" },
    ],
  },
  {
    stem: "The visual pigment of the rods, which captures a photon and initiates transduction, is:",
    topic: "Special Senses",
    explanation:
      "Rhodopsin consists of the protein opsin bound to retinal, a derivative of vitamin A; absorbing a photon isomerizes the retinal, changing the opsin and triggering the cascade that closes the channels, which is why vitamin A deficiency impairs night vision.",
    choices: [
      { text: "rhodopsin", isCorrect: true },
      { text: "hemoglobin" },
      { text: "melanin" },
      { text: "myoglobin" },
    ],
  },
  {
    stem: "The region of the retina with the highest visual acuity, packed with cones and used for detailed central vision, is the:",
    topic: "Special Senses",
    explanation:
      "The fovea has the densest concentration of cones, each connected through relatively private pathways, giving the sharpest vision; we move the eyes so that whatever we examine closely falls on this small central region.",
    choices: [
      { text: "fovea", isCorrect: true },
      { text: "optic disc" },
      { text: "peripheral retina" },
      { text: "blind spot" },
    ],
  },
  {
    stem: "In myopia, or nearsightedness, distant objects appear blurred because the image is focused:",
    topic: "Special Senses",
    explanation:
      "In the myopic eye the refractive power is too great for the length of the eyeball, so parallel rays from a distant object converge in front of the retina; a diverging (concave) lens corrects this by shifting the focus back onto the retina.",
    choices: [
      { text: "in front of the retina", isCorrect: true },
      { text: "behind the retina" },
      { text: "exactly on the retina" },
      { text: "on the optic nerve head" },
    ],
  },
  {
    stem: "Along the cochlea, high-frequency sounds maximally displace the basilar membrane at its:",
    topic: "Special Senses",
    explanation:
      "The basilar membrane is tonotopically organized: it is narrow and stiff at the base, which resonates to high frequencies, and wide and floppy at the apex, which responds to low frequencies; the brain reads pitch from which region is stimulated.",
    choices: [
      { text: "base, near the oval window", isCorrect: true },
      { text: "apex, at its far end" },
      { text: "exact middle only" },
      { text: "attachment to the ossicles" },
    ],
  },
  {
    stem: "The sensory transducers of hearing, which convert sound-induced movement into a neural signal, are the:",
    topic: "Special Senses",
    explanation:
      "Hair cells of the organ of Corti bend their stereocilia as the basilar membrane vibrates, opening ion channels and depolarizing the cell to release transmitter; damage to these hair cells is a common cause of permanent sensorineural hearing loss.",
    choices: [
      { text: "hair cells of the organ of Corti", isCorrect: true },
      { text: "rods and cones of the retina" },
      { text: "olfactory receptor neurons" },
      { text: "free nerve endings of the skin" },
    ],
  },
  {
    stem: "The semicircular canals of the inner ear detect:",
    topic: "Special Senses",
    explanation:
      "Each semicircular canal senses rotation in its own plane, as endolymph movement bends the cupula and its hair cells; the otolith organs, the utricle and saccule, instead detect linear acceleration and the pull of gravity.",
    choices: [
      { text: "rotational head acceleration", isCorrect: true },
      { text: "linear acceleration of the head" },
      { text: "the steady pull of gravity" },
      { text: "high-frequency sound waves" },
    ],
  },
  {
    stem: "The senses of taste and smell are mediated by receptors classified as:",
    topic: "Special Senses",
    explanation:
      "Taste and smell are chemical senses: their receptors are chemoreceptors that respond to dissolved or airborne molecules, transducing chemistry into neural signals; together they largely account for the flavor of food.",
    choices: [
      { text: "chemoreceptors", isCorrect: true },
      { text: "mechanoreceptors" },
      { text: "photoreceptors" },
      { text: "thermoreceptors" },
    ],
  },
  {
    stem: "Which statements about the visual system are correct? Select all that apply.",
    type: "MULTI",
    topic: "Special Senses",
    explanation:
      "Rods handle dim-light vision, cones handle colour and fine detail, light hyperpolarizes the photoreceptors, and the fovea provides the highest acuity; rods do not mediate colour vision, and light hyperpolarizes rather than depolarizes the photoreceptors.",
    choices: [
      { text: "rods handle dim-light vision", isCorrect: true },
      { text: "cones handle colour and detail", isCorrect: true },
      { text: "light hyperpolarizes photoreceptors", isCorrect: true },
      { text: "the fovea has the highest acuity", isCorrect: true },
      { text: "rods mediate colour vision" },
      { text: "light depolarizes photoreceptors" },
    ],
  },
  {
    stem: "Which statements about the auditory and vestibular systems are correct? Select all that apply.",
    type: "MULTI",
    topic: "Special Senses",
    explanation:
      "The cochlea is tonotopically organized with high frequencies detected at the base, hair cells are the sensory transducers, and the semicircular canals detect rotation; the otolith organs detect linear acceleration rather than rotation, and the base does not detect low frequencies.",
    choices: [
      { text: "the cochlea is tonotopically organized", isCorrect: true },
      { text: "high frequencies are detected at the base", isCorrect: true },
      { text: "hair cells are the sensory transducers", isCorrect: true },
      { text: "semicircular canals detect rotation", isCorrect: true },
      { text: "the otolith organs detect rotation" },
      { text: "low frequencies are detected at the base" },
    ],
  },
  {
    stem: "The muscle spindle, lying among the muscle fibers, senses muscle stretch and initiates the:",
    topic: "Motor Systems & Reflexes",
    explanation:
      "Stretching a muscle excites its spindles, which reflexly drive the same muscle to contract in the stretch, or myotatic, reflex; the knee-jerk is the familiar example, and this monosynaptic loop helps maintain muscle tone and posture.",
    choices: [
      { text: "stretch (myotatic) reflex", isCorrect: true },
      { text: "flexor withdrawal reflex" },
      { text: "crossed extensor reflex" },
      { text: "pupillary light reflex" },
    ],
  },
  {
    stem: "The Golgi tendon organ senses the tension a muscle develops and acts to:",
    topic: "Motor Systems & Reflexes",
    explanation:
      "Located at the muscle-tendon junction, the Golgi tendon organ responds to force and reflexly inhibits its own muscle when tension rises; this autogenic inhibition protects the muscle and tendon and helps grade the force of contraction.",
    choices: [
      { text: "inhibit the muscle to limit tension", isCorrect: true },
      { text: "excite the muscle to raise tension" },
      { text: "detect the length of the muscle" },
      { text: "trigger a withdrawal from pain" },
    ],
  },
  {
    stem: "The knee-jerk stretch reflex is notable for being:",
    topic: "Motor Systems & Reflexes",
    explanation:
      "The stretch reflex is monosynaptic: the spindle afferent synapses directly on the alpha motor neuron of the same muscle, with no interneuron in between; this direct connection makes it the fastest and simplest reflex in the body.",
    choices: [
      { text: "a monosynaptic spinal reflex", isCorrect: true },
      { text: "a polysynaptic spinal reflex" },
      { text: "dependent on the cerebral cortex" },
      { text: "mediated entirely by the cerebellum" },
    ],
  },
  {
    stem: "The gamma motor neurons serve to:",
    topic: "Motor Systems & Reflexes",
    explanation:
      "Gamma motor neurons contract the ends of the spindle's intrafusal fibers, keeping the spindle taut and sensitive as the whole muscle shortens; without this adjustment the spindle would go slack during contraction and stop reporting length.",
    choices: [
      { text: "set the sensitivity of the muscle spindle", isCorrect: true },
      { text: "directly power the main muscle force" },
      { text: "inhibit the antagonist muscle" },
      { text: "carry pain from the muscle" },
    ],
  },
  {
    stem: "The flexor withdrawal reflex that pulls a limb away from a painful stimulus is:",
    topic: "Motor Systems & Reflexes",
    explanation:
      "The withdrawal reflex involves interneurons linking pain afferents to several motor pools, so it is polysynaptic; it recruits the flexors to withdraw the limb and, through the crossed extensor reflex, braces the opposite limb for support.",
    choices: [
      { text: "polysynaptic, using interneurons", isCorrect: true },
      { text: "monosynaptic and very fast" },
      { text: "purely a voluntary movement" },
      { text: "mediated by the tendon organ" },
    ],
  },
  {
    stem: "When a muscle contracts in a reflex, its opposing muscle relaxes through the mechanism of:",
    topic: "Motor Systems & Reflexes",
    explanation:
      "Reciprocal innervation wires the reflex so that as the agonist is excited, interneurons inhibit the motor neurons of the antagonist; this coordination lets the intended movement proceed without the opposing muscle fighting against it.",
    choices: [
      { text: "reciprocal innervation", isCorrect: true },
      { text: "autogenic inhibition" },
      { text: "temporal summation" },
      { text: "the crossed extensor path" },
    ],
  },
  {
    stem: "An upper motor neuron lesion, above the level of the final motor neuron, characteristically produces:",
    topic: "Motor Systems & Reflexes",
    explanation:
      "Loss of descending control releases the spinal circuits, producing increased tone, brisk reflexes, and an upgoing plantar response, with weakness but little wasting; a lower motor neuron lesion instead gives flaccid weakness, lost reflexes, and atrophy.",
    choices: [
      { text: "spasticity and exaggerated reflexes", isCorrect: true },
      { text: "flaccid paralysis and lost reflexes" },
      { text: "marked early muscle wasting" },
      { text: "fine tremor only during movement" },
    ],
  },
  {
    stem: "The alpha motor neuron is often called the final common pathway because:",
    topic: "Motor Systems & Reflexes",
    explanation:
      "Every influence on a muscle, whether reflex, cortical, cerebellar, or from the basal ganglia, must ultimately act through the alpha motor neuron to reach the muscle; it is the last neuron in the chain and the only route out to the muscle fibers.",
    choices: [
      { text: "all motor commands converge on it", isCorrect: true },
      { text: "it is the first neuron in the pathway" },
      { text: "it senses muscle stretch directly" },
      { text: "it acts without any input" },
    ],
  },
  {
    stem: "Which of the following are features of an upper motor neuron lesion? Select all that apply.",
    type: "MULTI",
    topic: "Motor Systems & Reflexes",
    explanation:
      "An upper motor neuron lesion causes spastic increased tone, exaggerated tendon reflexes, an extensor plantar response, and weakness with little wasting; fasciculations and marked early atrophy are signs of lower motor neuron damage instead.",
    choices: [
      { text: "spastic increase in muscle tone", isCorrect: true },
      { text: "exaggerated tendon reflexes", isCorrect: true },
      { text: "an extensor plantar (Babinski) sign", isCorrect: true },
      { text: "weakness with little wasting", isCorrect: true },
      { text: "visible muscle fasciculations" },
      { text: "marked early muscle atrophy" },
    ],
  },
  {
    stem: "Damage to the cerebellum characteristically produces:",
    topic: "Cerebellum & Basal Ganglia",
    explanation:
      "The cerebellum coordinates the timing and accuracy of movement, so its damage causes ataxia, an intention tremor that worsens as the target is neared, and difficulty judging distances; strength is preserved because the cerebellum does not itself generate force.",
    choices: [
      { text: "ataxia and an intention tremor", isCorrect: true },
      { text: "a resting tremor and rigidity" },
      { text: "flaccid paralysis of the limbs" },
      { text: "a complete loss of sensation" },
    ],
  },
  {
    stem: "A major role of the cerebellum in movement is to:",
    topic: "Cerebellum & Basal Ganglia",
    explanation:
      "The cerebellum continuously compares the intended movement with sensory feedback about the actual movement and issues corrections; acting as an error-correcting comparator, it makes movement smooth and accurate rather than clumsy and overshooting.",
    choices: [
      { text: "compare intended with actual movement", isCorrect: true },
      { text: "initiate voluntary movement itself" },
      { text: "carry pain and temperature signals" },
      { text: "store long-term declarative memory" },
    ],
  },
  {
    stem: "Parkinson's disease results from the progressive loss of dopamine-producing neurons in the:",
    topic: "Cerebellum & Basal Ganglia",
    explanation:
      "Degeneration of the dopaminergic neurons of the substantia nigra deprives the basal ganglia of dopamine, unbalancing their circuits; the result is the resting tremor, rigidity, and slowness of Parkinson's disease, which levodopa therapy aims to relieve.",
    choices: [
      { text: "substantia nigra", isCorrect: true },
      { text: "cerebellar cortex" },
      { text: "primary motor cortex" },
      { text: "dorsal root ganglion" },
    ],
  },
  {
    stem: "A tremor that is present at rest and tends to lessen when a movement is made is characteristic of:",
    topic: "Cerebellum & Basal Ganglia",
    explanation:
      "A resting tremor that eases with purposeful movement points to basal ganglia disease such as Parkinson's; this contrasts with the cerebellar intention tremor, which is minimal at rest and worsens as the hand approaches its target.",
    choices: [
      { text: "parkinsonian basal ganglia disease", isCorrect: true },
      { text: "an active cerebellar disease" },
      { text: "an upper motor neuron lesion" },
      { text: "a peripheral nerve root injury" },
    ],
  },
  {
    stem: "The basal ganglia contribute to motor control chiefly by:",
    topic: "Cerebellum & Basal Ganglia",
    explanation:
      "The basal ganglia help select and scale desired movements while suppressing unwanted ones; disorders of these nuclei produce either too little movement, as in Parkinson's rigidity, or too much, as in the chorea of Huntington's disease.",
    choices: [
      { text: "selecting and scaling desired movement", isCorrect: true },
      { text: "sensing the stretch of the muscles" },
      { text: "carrying voluntary commands to the cord" },
      { text: "coordinating the timing of breathing" },
    ],
  },
  {
    stem: "The involuntary, dance-like movements of Huntington's disease, a chorea, reflect disease of the:",
    topic: "Cerebellum & Basal Ganglia",
    explanation:
      "Huntington's disease degenerates neurons of the basal ganglia, tipping their circuits toward excess movement and producing chorea; it illustrates how basal ganglia dysfunction can cause either a poverty or an excess of movement depending on which circuit fails.",
    choices: [
      { text: "basal ganglia", isCorrect: true },
      { text: "cerebellum" },
      { text: "spinal cord" },
      { text: "peripheral nerves" },
    ],
  },
  {
    stem: "True or False: Because its connections cross twice, damage to one side of the cerebellum produces incoordination on the same side of the body.",
    type: "TRUE_FALSE",
    topic: "Cerebellum & Basal Ganglia",
    explanation:
      "True. The double crossing of cerebellar pathways means each cerebellar hemisphere influences the same side of the body, so a one-sided lesion causes ipsilateral limb ataxia; this helps localize cerebellar disease at the bedside.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which of the following are features of Parkinson's disease? Select all that apply.",
    type: "MULTI",
    topic: "Cerebellum & Basal Ganglia",
    explanation:
      "Parkinson's disease produces a resting tremor, muscular rigidity, and bradykinesia, all stemming from the loss of nigral dopamine neurons; chorea and an intention tremor are features of other disorders, of the basal ganglia and cerebellum respectively.",
    choices: [
      { text: "a tremor present at rest", isCorrect: true },
      { text: "rigidity of the muscles", isCorrect: true },
      { text: "slowness of movement (bradykinesia)", isCorrect: true },
      { text: "loss of nigral dopamine neurons", isCorrect: true },
      { text: "dance-like choreic movements" },
      { text: "an intention tremor with reaching" },
    ],
  },
  {
    stem: "The parasympathetic division of the autonomic nervous system leaves the central nervous system at the:",
    topic: "Autonomic Nervous System",
    explanation:
      "Parasympathetic fibers emerge with certain cranial nerves and from the sacral spinal cord, the craniosacral outflow; the vagus alone supplies much of the thorax and abdomen, which is why it dominates rest-and-digest control of those organs.",
    choices: [
      { text: "cranial and sacral levels", isCorrect: true },
      { text: "thoracic and lumbar levels" },
      { text: "cervical levels only" },
      { text: "coccygeal levels only" },
    ],
  },
  {
    stem: "All autonomic preganglionic neurons, both sympathetic and parasympathetic, release the transmitter:",
    topic: "Autonomic Nervous System",
    explanation:
      "Every preganglionic autonomic fiber releases acetylcholine onto nicotinic receptors of the ganglion cell; the divisions then diverge at the postganglionic neuron, where the parasympathetic again uses acetylcholine but the sympathetic mostly uses norepinephrine.",
    choices: [
      { text: "acetylcholine", isCorrect: true },
      { text: "norepinephrine" },
      { text: "dopamine" },
      { text: "epinephrine" },
    ],
  },
  {
    stem: "Most sympathetic postganglionic neurons release onto their target organs the transmitter:",
    topic: "Autonomic Nervous System",
    explanation:
      "The typical sympathetic postganglionic fiber releases norepinephrine onto adrenergic receptors; a notable exception is the sympathetic supply to sweat glands, which uses acetylcholine, showing that the transmitter, not the division, defines the receptor.",
    choices: [
      { text: "norepinephrine", isCorrect: true },
      { text: "acetylcholine" },
      { text: "glutamate" },
      { text: "serotonin" },
    ],
  },
  {
    stem: "The adrenal medulla behaves like a modified sympathetic ganglion, secreting into the bloodstream mainly:",
    topic: "Autonomic Nervous System",
    explanation:
      "Preganglionic sympathetic fibers stimulate the adrenal medulla to pour epinephrine, with some norepinephrine, directly into the blood; this hormonal arm broadcasts the sympathetic message throughout the body during stress.",
    choices: [
      { text: "epinephrine", isCorrect: true },
      { text: "acetylcholine" },
      { text: "cortisol" },
      { text: "dopamine" },
    ],
  },
  {
    stem: "Parasympathetic stimulation of the eye causes the pupil to:",
    topic: "Autonomic Nervous System",
    explanation:
      "Parasympathetic fibers contract the circular sphincter muscle of the iris, constricting the pupil, as in the light reflex; sympathetic activity does the opposite, dilating the pupil by contracting the radial muscle during arousal or dim light.",
    choices: [
      { text: "constrict", isCorrect: true },
      { text: "dilate widely" },
      { text: "remain fixed in size" },
      { text: "lose its shape" },
    ],
  },
  {
    stem: "Sympathetic stimulation of the heart increases:",
    topic: "Autonomic Nervous System",
    explanation:
      "Sympathetic activity, through norepinephrine on beta-one receptors, raises both the heart rate and the force of contraction; parasympathetic vagal activity opposes this, chiefly slowing the rate, so the two divisions set the heart's performance together.",
    choices: [
      { text: "both heart rate and contractility", isCorrect: true },
      { text: "only the filling of the ventricles" },
      { text: "the tone of the gut wall" },
      { text: "the secretion of gastric acid" },
    ],
  },
  {
    stem: "Many organs receive both sympathetic and parasympathetic fibers, an arrangement of dual innervation in which the two divisions usually:",
    topic: "Autonomic Nervous System",
    explanation:
      "Where an organ has dual innervation the divisions typically exert opposing effects, and its moment-to-moment state reflects the balance of the two; each division also maintains a background tone, so activity can be raised or lowered from that baseline.",
    choices: [
      { text: "act in opposition to each other", isCorrect: true },
      { text: "act to reinforce each other" },
      { text: "never affect the same organ" },
      { text: "both simply excite the organ" },
    ],
  },
  {
    stem: "During a fight-or-flight response, sympathetic activation characteristically causes the airways to:",
    topic: "Autonomic Nervous System",
    explanation:
      "Sympathetic activation dilates the bronchi to ease airflow, along with raising heart rate, dilating the pupils, and diverting blood to muscle; these coordinated changes prepare the body for vigorous physical effort during stress or danger.",
    choices: [
      { text: "dilate to increase airflow", isCorrect: true },
      { text: "constrict to reduce airflow" },
      { text: "fill with secretions" },
      { text: "collapse completely" },
    ],
  },
  {
    stem: "Which effects are produced by sympathetic activation? Select all that apply.",
    type: "MULTI",
    topic: "Autonomic Nervous System",
    explanation:
      "Sympathetic activation prepares for exertion: it dilates the pupils, speeds the heart, widens the bronchi, and reduces gut motility to divert resources; pupillary constriction and increased gut motility are parasympathetic, rest-and-digest, effects.",
    choices: [
      { text: "dilation of the pupils", isCorrect: true },
      { text: "an increased heart rate", isCorrect: true },
      { text: "dilation of the bronchi", isCorrect: true },
      { text: "reduced gut motility", isCorrect: true },
      { text: "constriction of the pupils" },
      { text: "increased gut motility" },
    ],
  },
  {
    stem: "Fine discriminative touch, vibration, and conscious proprioception ascend the spinal cord in the:",
    topic: "Spinal Cord & Ascending Tracts",
    explanation:
      "These sensations travel up the dorsal columns on the same side, crossing only in the medulla before reaching the thalamus; because of this high crossing, a cord lesion disturbs them on the same side as the lesion below it.",
    choices: [
      { text: "dorsal column–medial lemniscus pathway", isCorrect: true },
      { text: "the lateral spinothalamic tract" },
      { text: "the lateral corticospinal tract" },
      { text: "the dorsal spinocerebellar tract" },
    ],
  },
  {
    stem: "Pain and temperature sensations are carried up the spinal cord in the:",
    topic: "Spinal Cord & Ascending Tracts",
    explanation:
      "Pain and temperature fibers synapse on entering the cord and cross almost at once, then ascend in the contralateral spinothalamic tract; this early crossing is why a cord lesion abolishes pain and temperature on the opposite side of the body.",
    choices: [
      { text: "lateral spinothalamic tract", isCorrect: true },
      { text: "dorsal column pathway" },
      { text: "lateral corticospinal tract" },
      { text: "dorsal spinocerebellar tract" },
    ],
  },
  {
    stem: "The principal descending pathway for voluntary movement is the:",
    topic: "Spinal Cord & Ascending Tracts",
    explanation:
      "The corticospinal, or pyramidal, tract carries voluntary motor commands from the cortex, most of its fibers crossing in the medullary pyramids to control the opposite side of the body; damage to it produces the signs of an upper motor neuron lesion.",
    choices: [
      { text: "corticospinal tract", isCorrect: true },
      { text: "spinothalamic tract" },
      { text: "dorsal column pathway" },
      { text: "spinocerebellar tract" },
    ],
  },
  {
    stem: "The corticospinal tract crosses to the opposite side mainly at the:",
    topic: "Spinal Cord & Ascending Tracts",
    explanation:
      "Most corticospinal fibers decussate in the medullary pyramids, so one hemisphere controls the opposite half of the body; a lesion above the crossing gives contralateral weakness, while one below it gives weakness on the same side.",
    choices: [
      { text: "pyramids of the medulla", isCorrect: true },
      { text: "level of each spinal segment" },
      { text: "midbrain tegmentum" },
      { text: "dorsal columns of the cord" },
    ],
  },
  {
    stem: "In a hemisection of the spinal cord, pain and temperature sensation are lost:",
    topic: "Spinal Cord & Ascending Tracts",
    explanation:
      "Because the spinothalamic fibers have already crossed, cutting one side of the cord removes pain and temperature on the opposite side below the lesion, while the dorsal-column and motor deficits appear on the same side; this dissociated pattern is the Brown-Séquard syndrome.",
    choices: [
      { text: "on the opposite side, below the lesion", isCorrect: true },
      { text: "on the same side, below the lesion" },
      { text: "on both sides equally" },
      { text: "only at the level of the lesion" },
    ],
  },
  {
    stem: "The central gray matter of the spinal cord contains chiefly:",
    topic: "Spinal Cord & Ascending Tracts",
    explanation:
      "The butterfly-shaped gray matter holds the neuronal cell bodies, including the motor neurons of the ventral horn and the sensory relay neurons of the dorsal horn; the surrounding white matter carries the myelinated ascending and descending tracts.",
    choices: [
      { text: "neuronal cell bodies and synapses", isCorrect: true },
      { text: "only myelinated ascending tracts" },
      { text: "only descending motor tracts" },
      { text: "cerebrospinal fluid alone" },
    ],
  },
  {
    stem: "True or False: Because the spinothalamic tract crosses within the cord but the dorsal columns cross in the medulla, a cord hemisection separates the side of pain loss from the side of proprioceptive loss.",
    type: "TRUE_FALSE",
    topic: "Spinal Cord & Ascending Tracts",
    explanation:
      "True. The different crossing points mean one side of the body loses pain and temperature while the other loses fine touch and proprioception below a hemisection; this dissociated sensory loss is the hallmark of the Brown-Séquard syndrome.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which sensations are carried by the dorsal column–medial lemniscus pathway? Select all that apply.",
    type: "MULTI",
    topic: "Spinal Cord & Ascending Tracts",
    explanation:
      "The dorsal columns carry fine discriminative touch, vibration, conscious proprioception, and two-point discrimination; pain and temperature travel instead in the spinothalamic tract, which crosses low in the cord rather than in the medulla.",
    choices: [
      { text: "fine discriminative touch", isCorrect: true },
      { text: "the sense of vibration", isCorrect: true },
      { text: "conscious proprioception", isCorrect: true },
      { text: "two-point discrimination", isCorrect: true },
      { text: "the sensation of pain" },
      { text: "the sensation of temperature" },
    ],
  },
  {
    stem: "On the electroencephalogram, low-frequency, high-amplitude delta waves are characteristic of:",
    topic: "Higher Cortical Function, Sleep & Memory",
    explanation:
      "As sleep deepens, cortical neurons fire in slow synchrony, producing large, slow delta waves; this slow-wave sleep contrasts with the fast, low-voltage activity of the alert waking brain and of rapid-eye-movement sleep.",
    choices: [
      { text: "deep slow-wave sleep", isCorrect: true },
      { text: "alert wakefulness" },
      { text: "rapid-eye-movement sleep" },
      { text: "a focal seizure" },
    ],
  },
  {
    stem: "Rapid-eye-movement sleep is characterized by:",
    topic: "Higher Cortical Function, Sleep & Memory",
    explanation:
      "In rapid-eye-movement sleep the electroencephalogram looks almost awake and vivid dreaming occurs, yet the skeletal muscles are actively paralyzed; this paradox of an active brain in a still body is a defining feature of the stage.",
    choices: [
      { text: "an awake-like EEG with muscle atonia", isCorrect: true },
      { text: "large slow waves and high muscle tone" },
      { text: "total electrical silence in the cortex" },
      { text: "continuous whole-body movement" },
    ],
  },
  {
    stem: "The formation of new declarative, or explicit, memories depends critically on the:",
    topic: "Higher Cortical Function, Sleep & Memory",
    explanation:
      "The hippocampus is required to lay down new conscious memories of facts and events; damage to it prevents the formation of new declarative memories while leaving older memories and the learning of skills relatively intact.",
    choices: [
      { text: "hippocampus", isCorrect: true },
      { text: "cerebellum" },
      { text: "basal ganglia" },
      { text: "thalamus alone" },
    ],
  },
  {
    stem: "A lasting strengthening of synaptic transmission thought to underlie learning and memory is called:",
    topic: "Higher Cortical Function, Sleep & Memory",
    explanation:
      "Long-term potentiation is a durable increase in synaptic strength that follows certain patterns of activity, especially in the hippocampus; it is widely regarded as a cellular basis for learning, converting experience into altered synaptic connections.",
    choices: [
      { text: "long-term potentiation", isCorrect: true },
      { text: "temporal summation" },
      { text: "presynaptic inhibition" },
      { text: "the refractory period" },
    ],
  },
  {
    stem: "Damage to Broca's area of the dominant frontal lobe produces:",
    topic: "Higher Cortical Function, Sleep & Memory",
    explanation:
      "Broca's area governs the motor production of speech, so its damage leaves comprehension largely intact but makes speech halting and effortful; this contrasts with Wernicke's area, whose damage impairs the understanding of language.",
    choices: [
      { text: "halting, effortful speech production", isCorrect: true },
      { text: "fluent speech with lost comprehension" },
      { text: "total deafness to spoken words" },
      { text: "an inability to see written words" },
    ],
  },
  {
    stem: "In most people, language function is localized predominantly to:",
    topic: "Higher Cortical Function, Sleep & Memory",
    explanation:
      "Language is usually lateralized to the left hemisphere, which is dominant for speech in the great majority of people; the right hemisphere contributes aspects such as the emotional tone and rhythm of speech, illustrating the specialization of the hemispheres.",
    choices: [
      { text: "the left cerebral hemisphere", isCorrect: true },
      { text: "the right cerebral hemisphere" },
      { text: "the cerebellum" },
      { text: "both hemispheres equally" },
    ],
  },
  {
    stem: "Wakefulness and the general level of arousal depend on the:",
    topic: "Higher Cortical Function, Sleep & Memory",
    explanation:
      "A network in the brainstem, the reticular activating system, projects widely to the cortex to maintain wakefulness and alertness; damage to it can cause a persistent loss of consciousness, underscoring its role in arousal.",
    choices: [
      { text: "reticular activating system", isCorrect: true },
      { text: "primary visual cortex" },
      { text: "cerebellar vermis" },
      { text: "dorsal column nuclei" },
    ],
  },
  {
    stem: "True or False: During rapid-eye-movement sleep the brain is highly active with an almost waking EEG, yet the skeletal muscles are effectively paralyzed.",
    type: "TRUE_FALSE",
    topic: "Higher Cortical Function, Sleep & Memory",
    explanation:
      "True. This stage combines an activated, dreaming brain with a profound loss of muscle tone; the atonia is thought to prevent the sleeper from physically acting out dreams, and it is a consistent marker of the rapid-eye-movement stage.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which statements about memory are correct? Select all that apply.",
    type: "MULTI",
    topic: "Higher Cortical Function, Sleep & Memory",
    explanation:
      "Declarative memory depends on the hippocampus, procedural skill learning is a separate system, long-term potentiation strengthens synapses, and consolidation converts short-term into long-term memory; the hippocampus does not store procedural skills, and memories are not fixed and unconsolidated.",
    choices: [
      { text: "declarative memory depends on the hippocampus", isCorrect: true },
      { text: "procedural memory is a separate system", isCorrect: true },
      { text: "long-term potentiation strengthens synapses", isCorrect: true },
      { text: "consolidation converts short- to long-term memory", isCorrect: true },
      { text: "the hippocampus stores all procedural skills" },
      { text: "memories are permanently fixed once formed" },
    ],
  },
  {
    stem: "Cerebrospinal fluid is produced mainly by the:",
    topic: "CSF, Blood-Brain Barrier & Cerebral Circulation",
    explanation:
      "The choroid plexus in the ventricles secretes most of the cerebrospinal fluid, which then circulates through the ventricles and subarachnoid space before being absorbed into the venous blood at the arachnoid granulations.",
    choices: [
      { text: "choroid plexus of the ventricles", isCorrect: true },
      { text: "arachnoid granulations" },
      { text: "cerebral cortex directly" },
      { text: "walls of the large arteries" },
    ],
  },
  {
    stem: "A major mechanical function of the cerebrospinal fluid is to:",
    topic: "CSF, Blood-Brain Barrier & Cerebral Circulation",
    explanation:
      "By surrounding and supporting the brain, the cerebrospinal fluid provides buoyancy that reduces the brain's effective weight and cushions it against impact; this fluid suspension protects the delicate tissue within the rigid skull.",
    choices: [
      { text: "cushion and support the brain", isCorrect: true },
      { text: "carry oxygen to the neurons" },
      { text: "generate the resting potential" },
      { text: "produce the cerebral hormones" },
    ],
  },
  {
    stem: "Obstruction of the normal flow of cerebrospinal fluid tends to cause:",
    topic: "CSF, Blood-Brain Barrier & Cerebral Circulation",
    explanation:
      "If the circulation or absorption of cerebrospinal fluid is blocked, fluid accumulates and the ventricles enlarge under rising pressure, a condition called hydrocephalus; in the unfused infant skull this can enlarge the head before other signs appear.",
    choices: [
      { text: "hydrocephalus with raised pressure", isCorrect: true },
      { text: "a collapse of the ventricles" },
      { text: "a fall in the intracranial pressure" },
      { text: "increased production of the fluid" },
    ],
  },
  {
    stem: "The blood-brain barrier that restricts the passage of many substances into the brain is formed chiefly by:",
    topic: "CSF, Blood-Brain Barrier & Cerebral Circulation",
    explanation:
      "Unlike most capillaries, brain capillaries are sealed by tight junctions between their endothelial cells, which block the free movement of solutes; this barrier protects the neural environment but also keeps many drugs from reaching the brain.",
    choices: [
      { text: "tight junctions between endothelial cells", isCorrect: true },
      { text: "a thick layer of connective tissue" },
      { text: "the surrounding cerebrospinal fluid" },
      { text: "the pia mater covering the brain" },
    ],
  },
  {
    stem: "Cerebral blood vessels dilate strongly, increasing brain blood flow, in response to a rise in:",
    topic: "CSF, Blood-Brain Barrier & Cerebral Circulation",
    explanation:
      "The cerebral circulation is exquisitely sensitive to carbon dioxide, dilating when arterial carbon dioxide rises and constricting when it falls; this is why hyperventilation, by lowering carbon dioxide, reduces cerebral blood flow.",
    choices: [
      { text: "arterial carbon dioxide", isCorrect: true },
      { text: "arterial oxygen tension" },
      { text: "the plasma sodium level" },
      { text: "the arterial pH toward alkaline" },
    ],
  },
  {
    stem: "The brain is unusually vulnerable to an interruption of its blood supply because it:",
    topic: "CSF, Blood-Brain Barrier & Cerebral Circulation",
    explanation:
      "Neurons depend on a nearly continuous supply of oxygen and glucose and store very little fuel, so even a brief interruption of flow impairs function and can quickly cause irreversible damage; this is why cerebral autoregulation is so important.",
    choices: [
      { text: "stores very little glucose or oxygen", isCorrect: true },
      { text: "can readily use fat for energy" },
      { text: "tolerates long periods without flow" },
      { text: "makes its own glucose supply" },
    ],
  },
  {
    stem: "True or False: Because the adult skull is rigid, an increase in the volume of brain tissue, blood, or cerebrospinal fluid within it raises the intracranial pressure.",
    type: "TRUE_FALSE",
    topic: "CSF, Blood-Brain Barrier & Cerebral Circulation",
    explanation:
      "True. With a fixed cranial volume, an increase in any one compartment must be offset by a decrease in another or the pressure rises; once the limited compensation is exhausted, even small added volumes sharply raise intracranial pressure.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which statements about cerebral physiology are correct? Select all that apply.",
    type: "MULTI",
    topic: "CSF, Blood-Brain Barrier & Cerebral Circulation",
    explanation:
      "Cerebrospinal fluid is made by the choroid plexus, the blood-brain barrier limits entry of many substances, cerebral blood flow rises when carbon dioxide is high, and the brain depends on a constant glucose supply; the fluid is not made by the arachnoid villi, and the brain holds little glucose reserve.",
    choices: [
      { text: "CSF is made by the choroid plexus", isCorrect: true },
      { text: "the blood-brain barrier limits entry of substances", isCorrect: true },
      { text: "cerebral flow rises with high carbon dioxide", isCorrect: true },
      { text: "the brain depends on a constant glucose supply", isCorrect: true },
      { text: "CSF is chiefly made by the arachnoid villi" },
      { text: "the brain stores very large glucose reserves" },
    ],
  },
  {
    stem: "The body's thermostat, which sets and defends the core temperature, is located in the:",
    topic: "Hypothalamus & Homeostatic Integration",
    explanation:
      "The hypothalamus compares the body temperature reported by central and peripheral sensors against a set point and triggers responses to correct any deviation; this makes it the central integrator for thermoregulation and much other homeostasis.",
    choices: [
      { text: "hypothalamus", isCorrect: true },
      { text: "cerebellum" },
      { text: "medulla oblongata" },
      { text: "thyroid gland" },
    ],
  },
  {
    stem: "A fever is produced when pyrogens act on the hypothalamus to:",
    topic: "Hypothalamus & Homeostatic Integration",
    explanation:
      "Pyrogens, acting through prostaglandins, raise the hypothalamic temperature set point, so the body now defends a higher target; feeling cold relative to the new set point, the person shivers and constricts vessels until the temperature climbs to meet it.",
    choices: [
      { text: "raise the temperature set point", isCorrect: true },
      { text: "lower the temperature set point" },
      { text: "abolish the set point entirely" },
      { text: "cool the blood directly" },
    ],
  },
  {
    stem: "On exposure to cold, the hypothalamus defends body temperature by triggering:",
    topic: "Hypothalamus & Homeostatic Integration",
    explanation:
      "To conserve and generate heat, the hypothalamus drives cutaneous vasoconstriction to reduce heat loss and shivering to produce heat; the opposite responses, sweating and vasodilation, are used to shed heat when the body is too warm.",
    choices: [
      { text: "shivering and skin vasoconstriction", isCorrect: true },
      { text: "sweating and skin vasodilation" },
      { text: "panting and vasodilation" },
      { text: "a fall in the metabolic rate" },
    ],
  },
  {
    stem: "The hormone leptin, secreted by adipose tissue, acts on the hypothalamus to:",
    topic: "Hypothalamus & Homeostatic Integration",
    explanation:
      "Leptin signals the size of the body's fat stores, and by acting on hypothalamic centers it reduces appetite and increases energy expenditure; this feedback links long-term energy stores to the control of feeding behavior.",
    choices: [
      { text: "reduce appetite", isCorrect: true },
      { text: "strongly increase appetite" },
      { text: "raise the body temperature" },
      { text: "stimulate thirst" },
    ],
  },
  {
    stem: "The sensation of thirst and the release of antidiuretic hormone are both triggered by hypothalamic:",
    topic: "Hypothalamus & Homeostatic Integration",
    explanation:
      "Osmoreceptors in the hypothalamus detect a rise in plasma osmolarity and respond by generating thirst and releasing antidiuretic hormone; together these restore water balance, one by increasing intake and the other by reducing renal water loss.",
    choices: [
      { text: "osmoreceptors sensing plasma concentration", isCorrect: true },
      { text: "baroreceptors sensing the blood pressure" },
      { text: "chemoreceptors sensing oxygen" },
      { text: "thermoreceptors sensing temperature" },
    ],
  },
  {
    stem: "The master clock that generates the body's circadian rhythms resides in the:",
    topic: "Hypothalamus & Homeostatic Integration",
    explanation:
      "The suprachiasmatic nucleus of the hypothalamus keeps roughly twenty-four-hour time and is reset each day by light signals from the retina; it coordinates daily rhythms of sleep, hormone release, and temperature throughout the body.",
    choices: [
      { text: "the suprachiasmatic nucleus", isCorrect: true },
      { text: "the pineal gland by itself" },
      { text: "the reticular activating system" },
      { text: "the anterior pituitary gland" },
    ],
  },
  {
    stem: "The hypothalamus links the nervous and endocrine systems because it:",
    topic: "Hypothalamus & Homeostatic Integration",
    explanation:
      "The hypothalamus controls the pituitary, secreting releasing hormones to the anterior lobe and making the hormones released by the posterior lobe; through this command over the pituitary it translates neural signals into wide-ranging endocrine responses.",
    choices: [
      { text: "controls the pituitary gland's output", isCorrect: true },
      { text: "secretes insulin into the bloodstream" },
      { text: "filters all the cerebrospinal fluid" },
      { text: "stores our long-term memories" },
    ],
  },
  {
    stem: "True or False: A fever raises the hypothalamic temperature set point, so the body then feels cold and shivers until it reaches the new, higher target.",
    type: "TRUE_FALSE",
    topic: "Hypothalamus & Homeostatic Integration",
    explanation:
      "True. Because the defended temperature has been reset upward, the still-normal body temperature is now sensed as too low; the resulting chills and shivering are the body's efforts to raise its temperature to the elevated set point.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "During dynamic exercise, blood flow to the active skeletal muscle increases chiefly because of:",
    topic: "Integrative & Clinical Physiology",
    explanation:
      "Working muscle releases metabolites such as adenosine, potassium, and carbon dioxide that dilate its own arterioles, matching flow to demand; this local metabolic control routes the raised cardiac output preferentially to the muscles that need it.",
    choices: [
      { text: "local metabolic vasodilation in the muscle", isCorrect: true },
      { text: "a rise in the local vascular tone" },
      { text: "sympathetic constriction of muscle vessels" },
      { text: "a fall in the cardiac output" },
    ],
  },
  {
    stem: "The immediate response to the fall in blood pressure after a hemorrhage is:",
    topic: "Integrative & Clinical Physiology",
    explanation:
      "The baroreceptors detect the drop in pressure and reflexly increase sympathetic outflow, raising heart rate and constricting vessels to restore pressure within seconds; slower hormonal systems then reinforce this to defend the circulation.",
    choices: [
      { text: "a baroreceptor-driven sympathetic reflex", isCorrect: true },
      { text: "a reflex slowing of the heart rate" },
      { text: "immediate renal salt excretion" },
      { text: "dilation of the systemic vessels" },
    ],
  },
  {
    stem: "On standing up from lying down, the reflex that prevents a fall in blood pressure works by:",
    topic: "Integrative & Clinical Physiology",
    explanation:
      "Gravity pools blood in the legs on standing, briefly lowering pressure; the baroreflex responds by increasing sympathetic tone to speed the heart and constrict vessels, restoring pressure and preventing the light-headedness of orthostatic hypotension.",
    choices: [
      { text: "raising sympathetic tone to heart and vessels", isCorrect: true },
      { text: "reflexly slowing the heart rate strongly" },
      { text: "widely dilating the veins of the legs" },
      { text: "shutting off the renin-angiotensin system" },
    ],
  },
  {
    stem: "The delivery of oxygen to the tissues is determined by the cardiac output multiplied by the:",
    topic: "Integrative & Clinical Physiology",
    explanation:
      "Oxygen delivery is the product of cardiac output and the oxygen content of the blood, so it can fall if either the pumping of the heart or the oxygen-carrying capacity is reduced; this integrative relationship guides the understanding of many clinical states.",
    choices: [
      { text: "oxygen content of the arterial blood", isCorrect: true },
      { text: "the systemic vascular resistance" },
      { text: "the central venous pressure" },
      { text: "the resting respiratory rate" },
    ],
  },
  {
    stem: "On ascent to high altitude, the initial physiological response to the low oxygen is:",
    topic: "Integrative & Clinical Physiology",
    explanation:
      "The low oxygen at altitude stimulates the peripheral chemoreceptors to increase ventilation, improving oxygen uptake at the cost of a respiratory alkalosis; over days to weeks, a rise in red-cell mass further improves oxygen-carrying capacity.",
    choices: [
      { text: "an increase in ventilation", isCorrect: true },
      { text: "a fall in the ventilation" },
      { text: "an immediate rise in red-cell mass" },
      { text: "a fall in the heart rate" },
    ],
  },
  {
    stem: "Circulatory shock is best defined as a state of:",
    topic: "Integrative & Clinical Physiology",
    explanation:
      "Shock is inadequate tissue perfusion, so that oxygen and nutrient delivery fail to meet the cells' needs; whatever its cause, the resulting cellular hypoxia, if not reversed, leads to organ dysfunction and can become irreversible.",
    choices: [
      { text: "inadequate perfusion of the tissues", isCorrect: true },
      { text: "an excessive perfusion of tissues" },
      { text: "a simple fall in the heart rate" },
      { text: "a rise in the blood oxygen content" },
    ],
  },
  {
    stem: "A patient who has lost significant blood shows a fast, thready pulse and cool, pale skin because of:",
    topic: "Integrative & Clinical Physiology",
    explanation:
      "The sympathetic response to blood loss speeds the heart and constricts the skin vessels to defend central blood pressure, producing the rapid pulse and the cool, pale skin; these signs are clues to the body's compensation for hypovolemia.",
    choices: [
      { text: "a compensatory sympathetic response", isCorrect: true },
      { text: "a dominant parasympathetic response" },
      { text: "dilation of the skin blood vessels" },
      { text: "a primary failure of the heart muscle" },
    ],
  },
  {
    stem: "Which of the following occur in the integrated response to significant hemorrhage? Select all that apply.",
    type: "MULTI",
    topic: "Integrative & Clinical Physiology",
    explanation:
      "Blood loss provokes increased sympathetic outflow, a faster heart rate, and release of renin and angiotensin and of antidiuretic hormone, all defending pressure and volume; a slowing of the heart and suppression of aldosterone would be counterproductive and do not occur.",
    choices: [
      { text: "increased sympathetic outflow", isCorrect: true },
      { text: "an increased heart rate", isCorrect: true },
      { text: "release of renin and angiotensin", isCorrect: true },
      { text: "release of antidiuretic hormone", isCorrect: true },
      { text: "a reflex fall in the heart rate" },
      { text: "suppression of aldosterone release" },
    ],
  },
];
