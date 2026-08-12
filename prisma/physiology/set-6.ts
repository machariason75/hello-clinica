/**
 * PHYSIOLOGY — PRACTICE SET 6
 * Endocrine & Reproductive Physiology
 *
 * Guyton & Hall / Ganong depth. Hormone mechanisms and signaling, the
 * hypothalamic-pituitary axis, the thyroid, the adrenal cortex and medulla, the
 * endocrine pancreas and glucose regulation, calcium-regulating hormones, growth
 * hormone, and male and female reproductive physiology. 100 questions.
 *
 * Options are length-matched (the correct answer is not perceptibly the longest)
 * and every distractor is a defensible near-miss. Positions randomized by engine.
 */

import type { Q } from "../_lib/qbank";

export const PHYSIOLOGY_SET_6: Q[] = [
  {
    stem: "Peptide hormones and catecholamines act on their target cells by:",
    topic: "Hormone Signaling & Mechanisms",
    explanation:
      "Because they cannot cross the lipid membrane, peptide hormones and catecholamines bind receptors on the cell surface and act through second messengers such as cyclic AMP; this indirect pathway gives them a rapid but relatively brief action.",
    choices: [
      { text: "binding surface receptors and second messengers", isCorrect: true },
      { text: "entering the cell to alter gene transcription" },
      { text: "binding carrier proteins in the plasma" },
      { text: "diffusing freely through the cell membrane" },
    ],
  },
  {
    stem: "Steroid hormones alter cell function mainly by:",
    topic: "Hormone Signaling & Mechanisms",
    explanation:
      "Being lipid-soluble, steroids diffuse into the cell and bind intracellular receptors that act as transcription factors, changing the synthesis of specific proteins; this genomic mechanism makes their effects slower in onset but longer in duration.",
    choices: [
      { text: "binding intracellular receptors that regulate genes", isCorrect: true },
      { text: "acting on surface receptors and cyclic AMP" },
      { text: "opening ion channels in the membrane" },
      { text: "being stored in secretory vesicles" },
    ],
  },
  {
    stem: "Many peptide hormones raise the intracellular concentration of the second messenger:",
    topic: "Hormone Signaling & Mechanisms",
    explanation:
      "A common pathway couples the hormone receptor through a stimulatory G protein to adenylyl cyclase, raising cyclic AMP, which activates protein kinase A; this cascade amplifies the signal so that a few hormone molecules alter many cellular processes.",
    choices: [
      { text: "cyclic AMP", isCorrect: true },
      { text: "free cholesterol" },
      { text: "messenger RNA" },
      { text: "plasma sodium" },
    ],
  },
  {
    stem: "Steroid and thyroid hormones are transported in the blood largely:",
    topic: "Hormone Signaling & Mechanisms",
    explanation:
      "Their poor water solubility means these hormones circulate mostly bound to specific carrier proteins, which extend their half-life and buffer their free levels; only the small free fraction is biologically active and available to enter cells.",
    choices: [
      { text: "bound to plasma carrier proteins", isCorrect: true },
      { text: "dissolved freely in the plasma" },
      { text: "packaged inside blood cells" },
      { text: "attached to circulating glucose" },
    ],
  },
  {
    stem: "Most endocrine axes are kept stable by the mechanism of:",
    topic: "Hormone Signaling & Mechanisms",
    explanation:
      "In negative feedback, the hormone or its effect inhibits its own further release, holding the system near a set point; this dominant pattern of endocrine control keeps hormone levels within narrow limits despite changing demands.",
    choices: [
      { text: "negative feedback control", isCorrect: true },
      { text: "positive feedback control" },
      { text: "feed-forward amplification" },
      { text: "open-loop stimulation" },
    ],
  },
  {
    stem: "When a hormone is chronically elevated, target cells often reduce their responsiveness by:",
    topic: "Hormone Signaling & Mechanisms",
    explanation:
      "Persistent high hormone levels frequently lead to down-regulation, a fall in the number of available receptors that blunts the response; the opposite, up-regulation, can raise sensitivity when hormone levels are chronically low.",
    choices: [
      { text: "down-regulating their receptors", isCorrect: true },
      { text: "up-regulating their receptors" },
      { text: "secreting more of the hormone" },
      { text: "increasing the carrier proteins" },
    ],
  },
  {
    stem: "Cortisol is said to have a permissive effect on catecholamines because it:",
    topic: "Hormone Signaling & Mechanisms",
    explanation:
      "A permissive hormone does not itself produce an effect but is required for another hormone to act fully; cortisol maintains the vascular responsiveness to catecholamines, so without it the pressor action of epinephrine and norepinephrine is impaired.",
    choices: [
      { text: "is needed for their full action", isCorrect: true },
      { text: "directly opposes their action" },
      { text: "replaces them at the receptor" },
      { text: "prevents their release entirely" },
    ],
  },
  {
    stem: "Insulin and several growth factors act through a receptor that is a:",
    topic: "Hormone Signaling & Mechanisms",
    explanation:
      "The insulin receptor is a receptor tyrosine kinase that, when bound, phosphorylates itself and downstream substrates to trigger the cell's metabolic responses; this differs from the G-protein-coupled receptors used by many other peptide hormones.",
    choices: [
      { text: "receptor tyrosine kinase", isCorrect: true },
      { text: "G-protein-coupled receptor" },
      { text: "ligand-gated ion channel" },
      { text: "intracellular steroid receptor" },
    ],
  },
  {
    stem: "Compared with steroid and thyroid hormones, peptide hormones generally have a:",
    topic: "Hormone Signaling & Mechanisms",
    explanation:
      "Peptide hormones are cleared quickly and are not protein-bound to any great extent, so their half-lives are short and their effects can be turned on and off rapidly; steroid and thyroid hormones, carried on proteins, persist far longer in the blood.",
    choices: [
      { text: "shorter half-life in the blood", isCorrect: true },
      { text: "longer half-life in the blood" },
      { text: "identical half-life to steroids" },
      { text: "no measurable half-life at all" },
    ],
  },
  {
    stem: "Which features are characteristic of steroid hormones? Select all that apply.",
    type: "MULTI",
    topic: "Hormone Signaling & Mechanisms",
    explanation:
      "Steroid hormones are made from cholesterol, diffuse into the cell to bind intracellular receptors, act by changing gene transcription, and travel bound to carrier proteins; they do not signal through surface receptors and cyclic AMP, and they are not short-lived.",
    choices: [
      { text: "they are synthesized from cholesterol", isCorrect: true },
      { text: "they bind intracellular receptors", isCorrect: true },
      { text: "they act by changing gene transcription", isCorrect: true },
      { text: "they circulate bound to carrier proteins", isCorrect: true },
      { text: "they act via surface receptors and cyclic AMP" },
      { text: "they have very short half-lives" },
    ],
  },
  {
    stem: "True or False: Because peptide hormones cannot cross the cell membrane, they act through surface receptors and intracellular second messengers.",
    type: "TRUE_FALSE",
    topic: "Hormone Signaling & Mechanisms",
    explanation:
      "True. Their water solubility keeps them outside the cell, so they must bind receptors on the surface and relay their message inward through second messengers; this contrasts with the lipid-soluble steroids that enter the cell directly.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Oxytocin and antidiuretic hormone, released from the posterior pituitary, are actually synthesized in the:",
    topic: "Hypothalamic-Pituitary Axis",
    explanation:
      "These two hormones are made by hypothalamic neurons whose axons run down into the posterior pituitary, where the hormones are stored and released into the blood; the posterior lobe is thus neural tissue that makes no hormone of its own.",
    choices: [
      { text: "neurons of the hypothalamus", isCorrect: true },
      { text: "cells of the posterior pituitary" },
      { text: "cells of the anterior pituitary" },
      { text: "cells of the pineal gland" },
    ],
  },
  {
    stem: "Hypothalamic releasing hormones reach the anterior pituitary by way of the:",
    topic: "Hypothalamic-Pituitary Axis",
    explanation:
      "A specialized portal venous system carries releasing and inhibiting hormones from the hypothalamus directly to the anterior pituitary, allowing tiny amounts to control it without being diluted in the general circulation; this link is vascular, not neural.",
    choices: [
      { text: "hypophyseal portal vessels", isCorrect: true },
      { text: "posterior pituitary axons" },
      { text: "systemic arterial supply" },
      { text: "cerebrospinal fluid pathway" },
    ],
  },
  {
    stem: "The secretion of prolactin is unusual among the pituitary hormones because it is under predominant:",
    topic: "Hypothalamic-Pituitary Axis",
    explanation:
      "Prolactin is chiefly restrained by dopamine released from the hypothalamus, so it rises when that inhibition is removed, as by dopamine-blocking drugs or stalk damage; this tonic inhibition is the reverse of the stimulatory control of most pituitary hormones.",
    choices: [
      { text: "inhibition by hypothalamic dopamine", isCorrect: true },
      { text: "stimulation by a releasing hormone" },
      { text: "negative feedback by cortisol" },
      { text: "control by circulating thyroxine" },
    ],
  },
  {
    stem: "Adrenocorticotropic hormone from the anterior pituitary acts to:",
    topic: "Hypothalamic-Pituitary Axis",
    explanation:
      "Adrenocorticotropic hormone, cleaved from a larger precursor, stimulates the adrenal cortex to synthesize and release cortisol; cortisol in turn feeds back to inhibit both the pituitary and the hypothalamus, closing the stress-hormone loop.",
    choices: [
      { text: "stimulate cortisol from the adrenal cortex", isCorrect: true },
      { text: "stimulate thyroxine from the thyroid" },
      { text: "stimulate insulin from the pancreas" },
      { text: "stimulate milk output from the breast" },
    ],
  },
  {
    stem: "Thyroid-stimulating hormone from the anterior pituitary is regulated by negative feedback from:",
    topic: "Hypothalamic-Pituitary Axis",
    explanation:
      "Circulating thyroid hormones inhibit the release of thyroid-stimulating hormone and of hypothalamic thyrotropin-releasing hormone; so when thyroid hormone is high the stimulating hormone falls, and when it is low the stimulating hormone rises to compensate.",
    choices: [
      { text: "the circulating thyroid hormones", isCorrect: true },
      { text: "the adrenal cortisol level" },
      { text: "the plasma calcium level" },
      { text: "the circulating growth hormone" },
    ],
  },
  {
    stem: "The gonadotropins luteinizing hormone and follicle-stimulating hormone are released in response to hypothalamic:",
    topic: "Hypothalamic-Pituitary Axis",
    explanation:
      "Gonadotropin-releasing hormone, secreted in pulses by the hypothalamus, drives the release of both gonadotropins; the pulsatile pattern is essential, since continuous exposure paradoxically suppresses gonadotropin release rather than stimulating it.",
    choices: [
      { text: "gonadotropin-releasing hormone", isCorrect: true },
      { text: "thyrotropin-releasing hormone" },
      { text: "corticotropin-releasing hormone" },
      { text: "growth-hormone-releasing hormone" },
    ],
  },
  {
    stem: "Prolactin's principal physiological action is to:",
    topic: "Hypothalamic-Pituitary Axis",
    explanation:
      "Prolactin stimulates the breast to produce milk after birth; during pregnancy high estrogen and progesterone prepare the breast but block milk production, and their fall after delivery lets prolactin drive lactation while suckling sustains its release.",
    choices: [
      { text: "promote milk production by the breast", isCorrect: true },
      { text: "trigger ovulation at midcycle" },
      { text: "stimulate cortisol from the adrenal" },
      { text: "raise the plasma calcium level" },
    ],
  },
  {
    stem: "The hypothalamus links the nervous and endocrine systems in part by controlling the anterior pituitary through:",
    topic: "Hypothalamic-Pituitary Axis",
    explanation:
      "The hypothalamus secretes releasing and inhibiting hormones into the portal blood that adjust each anterior pituitary cell type; this integrates neural signals such as stress, temperature, and light with the body's hormonal output.",
    choices: [
      { text: "releasing and inhibiting hormones", isCorrect: true },
      { text: "direct motor nerve fibers" },
      { text: "the general arterial blood" },
      { text: "secretion of its own tropic hormones" },
    ],
  },
  {
    stem: "Continuous rather than pulsatile stimulation by gonadotropin-releasing hormone will:",
    topic: "Hypothalamic-Pituitary Axis",
    explanation:
      "The gonadotrophs require the natural pulsatile pattern of gonadotropin-releasing hormone; steady, unremitting exposure down-regulates their receptors and suppresses gonadotropin output, a paradox exploited therapeutically to lower sex-hormone levels.",
    choices: [
      { text: "suppress gonadotropin release", isCorrect: true },
      { text: "strongly increase gonadotropin release" },
      { text: "have no effect on the gonadotrophs" },
      { text: "trigger a surge of thyroid hormone" },
    ],
  },
  {
    stem: "True or False: The posterior pituitary is neural tissue that stores and releases hormones made by hypothalamic neurons, rather than synthesizing its own.",
    type: "TRUE_FALSE",
    topic: "Hypothalamic-Pituitary Axis",
    explanation:
      "True. Unlike the glandular anterior lobe, the posterior pituitary consists of the nerve terminals of hypothalamic neurons; it stores their oxytocin and antidiuretic hormone and releases them on demand but manufactures no hormone itself.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which hormones are secreted by the anterior pituitary? Select all that apply.",
    type: "MULTI",
    topic: "Hypothalamic-Pituitary Axis",
    explanation:
      "The anterior pituitary secretes growth hormone, thyroid-stimulating hormone, adrenocorticotropic hormone, and prolactin, among others; antidiuretic hormone and oxytocin are products of the hypothalamus released from the posterior lobe, not the anterior one.",
    choices: [
      { text: "growth hormone", isCorrect: true },
      { text: "thyroid-stimulating hormone", isCorrect: true },
      { text: "adrenocorticotropic hormone", isCorrect: true },
      { text: "prolactin", isCorrect: true },
      { text: "antidiuretic hormone" },
      { text: "oxytocin" },
    ],
  },
  {
    stem: "Many of the growth-promoting effects of growth hormone are not direct but are mediated by:",
    topic: "Growth Hormone & IGF-1",
    explanation:
      "Growth hormone stimulates the liver and other tissues to produce insulin-like growth factor one, which carries out much of the promotion of bone and tissue growth; this mediator accounts for the delayed, sustained growth-promoting action of the hormone.",
    choices: [
      { text: "insulin-like growth factor one", isCorrect: true },
      { text: "the hormone thyroxine" },
      { text: "adrenal cortisol" },
      { text: "pancreatic glucagon" },
    ],
  },
  {
    stem: "A direct metabolic effect of growth hormone, which opposes insulin, is to:",
    topic: "Growth Hormone & IGF-1",
    explanation:
      "Growth hormone mobilizes fuel by promoting lipolysis and reducing glucose uptake, so it raises blood glucose; this diabetogenic, anti-insulin action spares glucose for growth but, in excess, can produce glucose intolerance.",
    choices: [
      { text: "raise the blood glucose level", isCorrect: true },
      { text: "lower the blood glucose level" },
      { text: "increase glucose uptake by muscle" },
      { text: "suppress the breakdown of fat" },
    ],
  },
  {
    stem: "The secretion of growth hormone is stimulated by hypothalamic growth-hormone-releasing hormone and inhibited by:",
    topic: "Growth Hormone & IGF-1",
    explanation:
      "Somatostatin from the hypothalamus restrains growth hormone release, balancing the stimulatory releasing hormone; growth hormone and insulin-like growth factor one also feed back to inhibit their own secretion, keeping the axis in check.",
    choices: [
      { text: "somatostatin from the hypothalamus", isCorrect: true },
      { text: "dopamine from the hypothalamus" },
      { text: "cortisol from the adrenal cortex" },
      { text: "thyroxine from the thyroid gland" },
    ],
  },
  {
    stem: "Growth-hormone secretion is normally increased by:",
    topic: "Growth Hormone & IGF-1",
    explanation:
      "Growth hormone rises during deep sleep, exercise, fasting, and hypoglycemia, all states that call for mobilizing fuel or building tissue; a high blood glucose, by contrast, suppresses its release, matching secretion to metabolic need.",
    choices: [
      { text: "deep sleep, exercise, and fasting", isCorrect: true },
      { text: "a high blood glucose level" },
      { text: "a large carbohydrate meal" },
      { text: "chronic overfeeding of glucose" },
    ],
  },
  {
    stem: "An excess of growth hormone arising in an adult, after the epiphyseal growth plates have closed, produces:",
    topic: "Growth Hormone & IGF-1",
    explanation:
      "With the growth plates fused, excess growth hormone can no longer lengthen the long bones, so instead the bones thicken and soft tissues enlarge, giving the coarse features, large hands, and jaw of acromegaly; before closure it would cause gigantism.",
    choices: [
      { text: "acromegaly with bony overgrowth", isCorrect: true },
      { text: "gigantism with very tall stature" },
      { text: "dwarfism with short stature" },
      { text: "no change in the skeleton" },
    ],
  },
  {
    stem: "A deficiency of growth hormone in a child characteristically causes:",
    topic: "Growth Hormone & IGF-1",
    explanation:
      "Without adequate growth hormone and its mediator, a child grows slowly and attains short stature with normal body proportions; the condition is distinct from disorders that produce disproportionate short stature or intellectual impairment.",
    choices: [
      { text: "short stature with normal proportions", isCorrect: true },
      { text: "very tall stature with long limbs" },
      { text: "coarse features and a large jaw" },
      { text: "obesity with rapid linear growth" },
    ],
  },
  {
    stem: "Among its building actions, growth hormone promotes:",
    topic: "Growth Hormone & IGF-1",
    explanation:
      "Growth hormone drives amino acids into cells and stimulates protein synthesis, favoring a positive nitrogen balance and lean tissue growth; combined with its effects on cartilage and bone, this supports the linear growth of the child.",
    choices: [
      { text: "protein synthesis in the tissues", isCorrect: true },
      { text: "breakdown of body protein" },
      { text: "storage of glucose as glycogen" },
      { text: "uptake of glucose by fat cells" },
    ],
  },
  {
    stem: "The coarse facial features, enlarged hands and feet, and protruding jaw of acromegaly reflect:",
    topic: "Growth Hormone & IGF-1",
    explanation:
      "In the adult these changes result from the continued action of excess growth hormone and insulin-like growth factor one on bone and soft tissue after the growth plates have closed; the slow, insidious progression often delays recognition for years.",
    choices: [
      { text: "soft-tissue and bony overgrowth", isCorrect: true },
      { text: "a loss of bone and muscle mass" },
      { text: "failure of the growth plates to form" },
      { text: "deficiency of insulin-like growth factor" },
    ],
  },
  {
    stem: "Which of the following are actions of growth hormone? Select all that apply.",
    type: "MULTI",
    topic: "Growth Hormone & IGF-1",
    explanation:
      "Growth hormone stimulates linear bone growth through insulin-like growth factor one, increases protein synthesis, promotes lipolysis, and raises blood glucose by opposing insulin; it does not increase glucose uptake by muscle or lower blood glucose, which are insulin's effects.",
    choices: [
      { text: "linear bone growth via IGF-one", isCorrect: true },
      { text: "increased protein synthesis", isCorrect: true },
      { text: "increased breakdown of stored fat", isCorrect: true },
      { text: "a rise in the blood glucose", isCorrect: true },
      { text: "increased glucose uptake by muscle" },
      { text: "a fall in the blood glucose" },
    ],
  },
  {
    stem: "True or False: Growth hormone raises blood glucose and antagonizes insulin, so an excess of it can produce glucose intolerance.",
    type: "TRUE_FALSE",
    topic: "Growth Hormone & IGF-1",
    explanation:
      "True. By promoting lipolysis and reducing tissue glucose uptake, growth hormone is diabetogenic; in conditions of chronic excess such as acromegaly this anti-insulin action can lead to impaired glucose tolerance or overt diabetes.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The synthesis of thyroid hormone requires the trapping of iodide and its attachment onto:",
    topic: "Thyroid Physiology",
    explanation:
      "The thyroid actively traps iodide, oxidizes it, and organifies it onto tyrosine residues of thyroglobulin within the follicle; the iodinated tyrosines then couple to form the hormones, which are stored bound to thyroglobulin until needed.",
    choices: [
      { text: "the protein thyroglobulin", isCorrect: true },
      { text: "circulating plasma albumin" },
      { text: "the enzyme thyroid peroxidase" },
      { text: "a surface membrane receptor" },
    ],
  },
  {
    stem: "The more biologically active thyroid hormone, much of it formed by conversion in peripheral tissues, is:",
    topic: "Thyroid Physiology",
    explanation:
      "The gland secretes mainly thyroxine, but peripheral deiodinases convert much of it to triiodothyronine, which binds the nuclear receptor far more avidly; triiodothyronine therefore mediates most of the biological action of thyroid hormone.",
    choices: [
      { text: "triiodothyronine (T-three)", isCorrect: true },
      { text: "thyroxine (T-four)" },
      { text: "reverse triiodothyronine" },
      { text: "thyroid-stimulating hormone" },
    ],
  },
  {
    stem: "A major action of thyroid hormone throughout the body is to:",
    topic: "Thyroid Physiology",
    explanation:
      "Thyroid hormone increases oxygen consumption and heat production in most tissues, raising the basal metabolic rate; this calorigenic action explains the weight, temperature, and energy changes seen when thyroid function is too high or too low.",
    choices: [
      { text: "increase the basal metabolic rate", isCorrect: true },
      { text: "decrease the basal metabolic rate" },
      { text: "lower the body core temperature" },
      { text: "directly raise the plasma calcium" },
    ],
  },
  {
    stem: "Thyroid hormone enhances the body's responsiveness to catecholamines largely by:",
    topic: "Thyroid Physiology",
    explanation:
      "Thyroid hormone increases the number of beta-adrenergic receptors, so tissues respond more strongly to sympathetic stimulation; this is why hyperthyroidism causes a fast heart rate, tremor, and other signs resembling sympathetic overactivity.",
    choices: [
      { text: "up-regulating beta-adrenergic receptors", isCorrect: true },
      { text: "down-regulating beta-adrenergic receptors" },
      { text: "releasing extra norepinephrine" },
      { text: "blocking the catecholamine receptors" },
    ],
  },
  {
    stem: "Hypothyroidism, a deficiency of thyroid hormone, characteristically produces:",
    topic: "Thyroid Physiology",
    explanation:
      "With metabolism slowed, patients feel cold, gain weight, and become sluggish, with a slow heart rate and dry skin; the low metabolic rate underlies each of these features, which reverse when hormone is replaced.",
    choices: [
      { text: "cold intolerance and weight gain", isCorrect: true },
      { text: "heat intolerance and weight loss" },
      { text: "a rapid heart rate and tremor" },
      { text: "high metabolic rate and sweating" },
    ],
  },
  {
    stem: "Adequate thyroid hormone during infancy is essential because its lack causes:",
    topic: "Thyroid Physiology",
    explanation:
      "Thyroid hormone is required for normal growth and for maturation of the nervous system; untreated deficiency in early life produces cretinism, with stunted growth and intellectual disability, which is why newborns are screened for it.",
    choices: [
      { text: "impaired growth and brain development", isCorrect: true },
      { text: "only a mild cosmetic change" },
      { text: "accelerated skeletal maturation" },
      { text: "excessive adult height" },
    ],
  },
  {
    stem: "An enlargement of the thyroid gland, a goiter, can result from prolonged stimulation by:",
    topic: "Thyroid Physiology",
    explanation:
      "When thyroid hormone output is low, as with iodine deficiency, the pituitary secretes more thyroid-stimulating hormone, which drives the gland to enlarge; a goiter can therefore accompany either an underactive or an overactive thyroid.",
    choices: [
      { text: "thyroid-stimulating hormone", isCorrect: true },
      { text: "adrenocorticotropic hormone" },
      { text: "parathyroid hormone" },
      { text: "growth hormone" },
    ],
  },
  {
    stem: "The thyroid stores a large reserve of hormone within its follicles, which means that:",
    topic: "Thyroid Physiology",
    explanation:
      "Because hormone is stockpiled bound to thyroglobulin in the colloid, the gland holds weeks of supply; this reservoir buffers day-to-day changes and is why blocking new synthesis lowers hormone levels only gradually over time.",
    choices: [
      { text: "changes in hormone level occur slowly", isCorrect: true },
      { text: "hormone runs out within a few hours" },
      { text: "the gland cannot store any hormone" },
      { text: "secretion must occur every minute" },
    ],
  },
  {
    stem: "Which of the following are features of hyperthyroidism? Select all that apply.",
    type: "MULTI",
    topic: "Thyroid Physiology",
    explanation:
      "An excess of thyroid hormone raises the metabolic rate and adrenergic tone, producing heat intolerance, weight loss despite a good appetite, a fast heart rate, and tremor with anxiety; cold intolerance and a slow heart rate instead point to hypothyroidism.",
    choices: [
      { text: "heat intolerance and sweating", isCorrect: true },
      { text: "weight loss despite good appetite", isCorrect: true },
      { text: "a rapid resting heart rate", isCorrect: true },
      { text: "fine tremor and anxiety", isCorrect: true },
      { text: "cold intolerance and dry skin" },
      { text: "a slow resting heart rate" },
    ],
  },
  {
    stem: "True or False: Thyroid hormone raises the basal metabolic rate and increases beta-adrenergic responsiveness, so hyperthyroidism can mimic sympathetic overactivity.",
    type: "TRUE_FALSE",
    topic: "Thyroid Physiology",
    explanation:
      "True. By increasing oxygen consumption and the number of beta receptors, thyroid hormone amplifies the body's response to catecholamines; the resulting tachycardia, tremor, and sweating resemble the effects of an overactive sympathetic system.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Aldosterone, the principal mineralocorticoid, is produced in the adrenal cortex by the:",
    topic: "Adrenal Cortex",
    explanation:
      "The outer zona glomerulosa makes aldosterone under the control of angiotensin and potassium; the middle zona fasciculata makes cortisol under adrenocorticotropic hormone, and the inner zona reticularis makes the adrenal androgens.",
    choices: [
      { text: "zona glomerulosa", isCorrect: true },
      { text: "zona fasciculata" },
      { text: "zona reticularis" },
      { text: "adrenal medulla" },
    ],
  },
  {
    stem: "A characteristic metabolic action of cortisol is to:",
    topic: "Adrenal Cortex",
    explanation:
      "Cortisol mobilizes fuel by stimulating gluconeogenesis and breaking down protein and fat, so it raises blood glucose; this stress hormone thereby ensures glucose availability, but in excess it produces the hyperglycemia and wasting of Cushing states.",
    choices: [
      { text: "raise blood glucose by gluconeogenesis", isCorrect: true },
      { text: "lower blood glucose by storing it" },
      { text: "promote protein synthesis in muscle" },
      { text: "suppress the breakdown of fat stores" },
    ],
  },
  {
    stem: "The secretion of cortisol follows a daily rhythm and is controlled by the pituitary hormone:",
    topic: "Adrenal Cortex",
    explanation:
      "Adrenocorticotropic hormone drives cortisol secretion, and its pulsatile release produces the normal peak in the early morning and trough at night; cortisol feeds back on the pituitary and hypothalamus to keep the axis in balance.",
    choices: [
      { text: "adrenocorticotropic hormone", isCorrect: true },
      { text: "thyroid-stimulating hormone" },
      { text: "growth hormone" },
      { text: "luteinizing hormone" },
    ],
  },
  {
    stem: "At high concentrations, cortisol is clinically useful because it:",
    topic: "Adrenal Cortex",
    explanation:
      "In pharmacological amounts cortisol and its analogues suppress inflammation and the immune response, which underlies their wide therapeutic use; the same actions, when cortisol is chronically high, impair wound healing and defense against infection.",
    choices: [
      { text: "suppresses inflammation and immunity", isCorrect: true },
      { text: "stimulates inflammation strongly" },
      { text: "raises the plasma calcium level" },
      { text: "promotes the retention of potassium" },
    ],
  },
  {
    stem: "Primary adrenal insufficiency, or Addison's disease, causes hyperpigmentation of the skin because of a high level of:",
    topic: "Adrenal Cortex",
    explanation:
      "When the adrenal cortex fails, cortisol falls and feedback inhibition is lost, so adrenocorticotropic hormone rises; because that hormone is cleaved from a precursor shared with a melanocyte-stimulating peptide, its excess darkens the skin.",
    choices: [
      { text: "adrenocorticotropic hormone", isCorrect: true },
      { text: "cortisol from the adrenal" },
      { text: "aldosterone from the adrenal" },
      { text: "thyroid-stimulating hormone" },
    ],
  },
  {
    stem: "The adrenal cortex, in its innermost zone, also secretes modest amounts of:",
    topic: "Adrenal Cortex",
    explanation:
      "The zona reticularis produces androgen precursors such as dehydroepiandrosterone, which are converted peripherally to more active androgens; these contribute little in men but are a significant androgen source in women.",
    choices: [
      { text: "androgen precursors", isCorrect: true },
      { text: "insulin and glucagon" },
      { text: "thyroid hormones" },
      { text: "parathyroid hormone" },
    ],
  },
  {
    stem: "A lack of aldosterone in adrenal insufficiency tends to cause:",
    topic: "Adrenal Cortex",
    explanation:
      "Without aldosterone the kidney loses sodium and retains potassium and hydrogen, so patients develop low sodium, high potassium, and a tendency to low blood pressure; these mineralocorticoid deficiencies can be life-threatening in an adrenal crisis.",
    choices: [
      { text: "sodium loss and high potassium", isCorrect: true },
      { text: "sodium retention and low potassium" },
      { text: "high blood pressure and edema" },
      { text: "a rise in the plasma calcium" },
    ],
  },
  {
    stem: "Which of the following are features of Cushing syndrome from cortisol excess? Select all that apply.",
    type: "MULTI",
    topic: "Adrenal Cortex",
    explanation:
      "Chronic cortisol excess causes central obesity with a rounded face, hyperglycemia, hypertension, and thin skin with muscle wasting; hyperpigmentation with a low cortisol and hyperkalemia are features of adrenal insufficiency, not of cortisol excess.",
    choices: [
      { text: "central obesity and a rounded face", isCorrect: true },
      { text: "a raised blood glucose level", isCorrect: true },
      { text: "hypertension", isCorrect: true },
      { text: "muscle wasting and thin skin", isCorrect: true },
      { text: "hyperpigmentation with low cortisol" },
      { text: "a high plasma potassium level" },
    ],
  },
  {
    stem: "Parathyroid hormone is released from the parathyroid glands in response to:",
    topic: "Calcium & Bone Regulation",
    explanation:
      "The parathyroid cells sense the ionized calcium of the blood and secrete more hormone when it falls; the hormone then raises calcium by acting on bone, kidney, and, through vitamin D, the gut, restoring the level toward normal.",
    choices: [
      { text: "a fall in the plasma calcium", isCorrect: true },
      { text: "a rise in the plasma calcium" },
      { text: "a fall in the plasma phosphate" },
      { text: "a rise in the plasma potassium" },
    ],
  },
  {
    stem: "The active form of vitamin D raises plasma calcium chiefly by:",
    topic: "Calcium & Bone Regulation",
    explanation:
      "Calcitriol, the active vitamin D, acts on the intestine to increase the absorption of dietary calcium and phosphate; the kidney makes this active form under the influence of parathyroid hormone, linking the two calcium-raising systems.",
    choices: [
      { text: "increasing intestinal calcium absorption", isCorrect: true },
      { text: "decreasing intestinal calcium absorption" },
      { text: "blocking calcium reabsorption in bone" },
      { text: "promoting calcium loss in the urine" },
    ],
  },
  {
    stem: "Calcitonin, secreted by the C cells of the thyroid, tends to:",
    topic: "Calcium & Bone Regulation",
    explanation:
      "Calcitonin inhibits the bone-resorbing osteoclasts and so lowers plasma calcium, opposing parathyroid hormone; its role in normal human calcium balance is minor, but it illustrates the push-and-pull control of the plasma calcium level.",
    choices: [
      { text: "lower the plasma calcium level", isCorrect: true },
      { text: "raise the plasma calcium level" },
      { text: "raise the plasma phosphate level" },
      { text: "stimulate the bone osteoclasts" },
    ],
  },
  {
    stem: "Parathyroid hormone acts on the kidney to raise calcium while simultaneously causing the plasma phosphate to:",
    topic: "Calcium & Bone Regulation",
    explanation:
      "The hormone increases renal calcium reabsorption but inhibits phosphate reabsorption, so phosphate is lost in the urine; lowering plasma phosphate helps prevent it from complexing the calcium the hormone is working to raise.",
    choices: [
      { text: "fall through urinary loss", isCorrect: true },
      { text: "rise through renal retention" },
      { text: "stay entirely unchanged" },
      { text: "rise with the plasma calcium" },
    ],
  },
  {
    stem: "A fall in the plasma ionized calcium increases neuromuscular excitability and can produce:",
    topic: "Calcium & Bone Regulation",
    explanation:
      "Low ionized calcium lowers the threshold for nerve and muscle firing, so spontaneous discharges cause the muscle cramps and spasms of tetany; a very high calcium has the opposite effect, depressing neuromuscular excitability.",
    choices: [
      { text: "muscle spasms and tetany", isCorrect: true },
      { text: "flaccid muscle paralysis" },
      { text: "a total loss of reflexes" },
      { text: "increased bone deposition" },
    ],
  },
  {
    stem: "Overactivity of the parathyroid glands, or hyperparathyroidism, characteristically causes:",
    topic: "Calcium & Bone Regulation",
    explanation:
      "Excess parathyroid hormone drives calcium out of bone and into the blood, producing hypercalcemia with weakened bones and a tendency to kidney stones; the classic description is of painful bones, kidney stones, and abdominal and mood symptoms.",
    choices: [
      { text: "hypercalcemia with bone loss", isCorrect: true },
      { text: "hypocalcemia with strong bones" },
      { text: "low calcium and high phosphate" },
      { text: "a fall in the urinary calcium" },
    ],
  },
  {
    stem: "Bone is continuously remodeled through the balanced activity of bone-forming cells and:",
    topic: "Calcium & Bone Regulation",
    explanation:
      "Osteoblasts lay down new bone matrix while osteoclasts resorb old bone, and the balance of their activity determines bone mass; parathyroid hormone, vitamin D, sex steroids, and mechanical load all tune this ongoing remodeling.",
    choices: [
      { text: "bone-resorbing osteoclasts", isCorrect: true },
      { text: "cartilage-forming chondrocytes" },
      { text: "blood-forming marrow cells" },
      { text: "fat-storing marrow cells" },
    ],
  },
  {
    stem: "Which actions tend to raise the plasma calcium? Select all that apply.",
    type: "MULTI",
    topic: "Calcium & Bone Regulation",
    explanation:
      "Calcium is raised by parathyroid hormone stimulating bone resorption and renal calcium reabsorption, by parathyroid hormone activating vitamin D, and by active vitamin D increasing gut absorption; calcitonin inhibiting osteoclasts and parathyroid hormone increasing phosphate reabsorption do not raise calcium.",
    choices: [
      { text: "parathyroid hormone resorbing bone", isCorrect: true },
      { text: "active vitamin D increasing gut uptake", isCorrect: true },
      { text: "parathyroid hormone reabsorbing calcium", isCorrect: true },
      { text: "parathyroid hormone activating vitamin D", isCorrect: true },
      { text: "calcitonin inhibiting the osteoclasts" },
      { text: "parathyroid hormone sparing phosphate" },
    ],
  },
  {
    stem: "Insulin is secreted by the pancreatic islets from the:",
    topic: "Endocrine Pancreas",
    explanation:
      "The beta cells of the islets of Langerhans make insulin, while the alpha cells make glucagon; the two hormones act in opposition to keep the blood glucose within narrow limits during feeding and fasting.",
    choices: [
      { text: "beta cells of the islets", isCorrect: true },
      { text: "alpha cells of the islets" },
      { text: "acinar cells of the pancreas" },
      { text: "duct cells of the pancreas" },
    ],
  },
  {
    stem: "Insulin lowers blood glucose partly by promoting glucose uptake into muscle and fat through:",
    topic: "Endocrine Pancreas",
    explanation:
      "Insulin recruits GLUT-four transporters to the membranes of muscle and fat cells, greatly increasing their glucose uptake; other tissues such as the brain take up glucose independently of insulin, which is why they are spared in insulin lack.",
    choices: [
      { text: "GLUT-four glucose transporters", isCorrect: true },
      { text: "sodium-glucose cotransporters" },
      { text: "simple diffusion across the membrane" },
      { text: "the sodium-potassium pump" },
    ],
  },
  {
    stem: "Glucagon, secreted by the islet alpha cells, acts mainly to:",
    topic: "Endocrine Pancreas",
    explanation:
      "Glucagon raises blood glucose during fasting by stimulating glycogen breakdown and gluconeogenesis in the liver; its balance with insulin sets whether the body stores or releases fuel, so a low insulin-to-glucagon ratio favors glucose output.",
    choices: [
      { text: "raise blood glucose from the liver", isCorrect: true },
      { text: "lower blood glucose into cells" },
      { text: "store glucose as liver glycogen" },
      { text: "promote fat storage in tissue" },
    ],
  },
  {
    stem: "The primary physiological stimulus for insulin secretion is a rise in:",
    topic: "Endocrine Pancreas",
    explanation:
      "Glucose entering the beta cell is metabolized to raise ATP, which closes potassium channels, depolarizes the cell, and triggers calcium-dependent insulin release; so the blood glucose level itself is the main controller of insulin output.",
    choices: [
      { text: "the blood glucose level", isCorrect: true },
      { text: "the blood ketone level" },
      { text: "the plasma sodium level" },
      { text: "the arterial oxygen level" },
    ],
  },
  {
    stem: "The balance between insulin and glucagon determines the metabolic state, so that a high insulin-to-glucagon ratio favors:",
    topic: "Endocrine Pancreas",
    explanation:
      "After a meal, a high ratio directs the body to store fuel, building glycogen, fat, and protein; during fasting the ratio falls and the body switches to mobilizing these stores, illustrating how the two hormones jointly control metabolism.",
    choices: [
      { text: "storage of fuel after a meal", isCorrect: true },
      { text: "mobilization of fuel in fasting" },
      { text: "breakdown of the liver glycogen" },
      { text: "release of glucose from the liver" },
    ],
  },
  {
    stem: "Type 1 diabetes mellitus results from:",
    topic: "Endocrine Pancreas",
    explanation:
      "In type one diabetes an autoimmune process destroys the insulin-producing beta cells, so insulin becomes deficient and must be replaced; type two, in contrast, arises mainly from resistance of the tissues to insulin that is still being produced.",
    choices: [
      { text: "autoimmune destruction of beta cells", isCorrect: true },
      { text: "resistance of tissues to insulin" },
      { text: "overproduction of insulin" },
      { text: "destruction of the alpha cells" },
    ],
  },
  {
    stem: "In a severe lack of insulin, unrestrained fat breakdown floods the blood with ketoacids, producing:",
    topic: "Endocrine Pancreas",
    explanation:
      "Without insulin to restrain lipolysis, the liver converts the flood of fatty acids into ketone bodies, and their accumulation causes a metabolic acidosis; this diabetic ketoacidosis is a dangerous complication chiefly of insulin-deficient diabetes.",
    choices: [
      { text: "a diabetic ketoacidosis", isCorrect: true },
      { text: "a metabolic alkalosis" },
      { text: "a respiratory acidosis" },
      { text: "hypoglycemic coma" },
    ],
  },
  {
    stem: "Which of the following are actions of insulin? Select all that apply.",
    type: "MULTI",
    topic: "Endocrine Pancreas",
    explanation:
      "Insulin is the hormone of the fed state: it increases glucose uptake by muscle and fat, stimulates glycogen synthesis, promotes fat storage, and drives protein synthesis; stimulating glycogen breakdown and gluconeogenesis are glucagon's opposing actions.",
    choices: [
      { text: "increased glucose uptake by muscle and fat", isCorrect: true },
      { text: "stimulation of glycogen synthesis", isCorrect: true },
      { text: "stimulation of fat storage", isCorrect: true },
      { text: "stimulation of protein synthesis", isCorrect: true },
      { text: "stimulation of glycogen breakdown" },
      { text: "stimulation of gluconeogenesis" },
    ],
  },
  {
    stem: "Testosterone is produced in the testis by the:",
    topic: "Male Reproductive Physiology",
    explanation:
      "The Leydig cells of the testicular interstitium secrete testosterone in response to luteinizing hormone; the Sertoli cells within the tubules, driven by follicle-stimulating hormone, instead support the developing sperm and secrete inhibin.",
    choices: [
      { text: "Leydig cells under luteinizing hormone", isCorrect: true },
      { text: "Sertoli cells under luteinizing hormone" },
      { text: "germ cells of the tubule wall" },
      { text: "cells of the epididymal duct" },
    ],
  },
  {
    stem: "The Sertoli cells of the seminiferous tubules, stimulated by follicle-stimulating hormone, support spermatogenesis and secrete:",
    topic: "Male Reproductive Physiology",
    explanation:
      "The Sertoli cells nurture the developing germ cells and secrete inhibin, which feeds back to restrain follicle-stimulating hormone; this selective feedback lets the axis regulate sperm production somewhat separately from testosterone output.",
    choices: [
      { text: "the hormone inhibin", isCorrect: true },
      { text: "the hormone testosterone" },
      { text: "luteinizing hormone" },
      { text: "the hormone oxytocin" },
    ],
  },
  {
    stem: "In the male hypothalamic-pituitary-gonadal axis, testosterone exerts negative feedback mainly by inhibiting:",
    topic: "Male Reproductive Physiology",
    explanation:
      "Testosterone feeds back on the hypothalamus and pituitary to suppress luteinizing hormone, while inhibin from the Sertoli cells restrains follicle-stimulating hormone; together these loops hold the reproductive hormones near their set points.",
    choices: [
      { text: "luteinizing hormone release", isCorrect: true },
      { text: "follicle-stimulating hormone alone" },
      { text: "inhibin from the testis" },
      { text: "its own action on the tubules" },
    ],
  },
  {
    stem: "Among its many effects, testosterone is responsible for:",
    topic: "Male Reproductive Physiology",
    explanation:
      "Testosterone drives the male secondary sexual characteristics, supports spermatogenesis, promotes protein anabolism and muscle growth, and sustains libido; these wide-ranging actions reflect androgen receptors in tissues throughout the body.",
    choices: [
      { text: "the male secondary sex characteristics", isCorrect: true },
      { text: "the development of the ovarian follicle" },
      { text: "the monthly shedding of an endometrium" },
      { text: "the production of breast milk" },
    ],
  },
  {
    stem: "In several target tissues, such as the prostate, testosterone is converted to a more potent androgen called:",
    topic: "Male Reproductive Physiology",
    explanation:
      "The enzyme five-alpha-reductase converts testosterone to dihydrotestosterone, which binds the androgen receptor more strongly and mediates prostate growth and much of external genital development; blocking this enzyme is used to treat prostate enlargement.",
    choices: [
      { text: "dihydrotestosterone", isCorrect: true },
      { text: "estradiol" },
      { text: "progesterone" },
      { text: "dehydroepiandrosterone" },
    ],
  },
  {
    stem: "Spermatogenesis in the seminiferous tubules requires a local environment of:",
    topic: "Male Reproductive Physiology",
    explanation:
      "Normal sperm production depends on a very high intratesticular testosterone concentration maintained by the Leydig and Sertoli cells; it also requires the slightly cooler temperature of the scrotum, which is why undescended testes impair fertility.",
    choices: [
      { text: "high intratesticular testosterone", isCorrect: true },
      { text: "low intratesticular testosterone" },
      { text: "high circulating estrogen" },
      { text: "a core body temperature" },
    ],
  },
  {
    stem: "Which statements about the male reproductive axis are correct? Select all that apply.",
    type: "MULTI",
    topic: "Male Reproductive Physiology",
    explanation:
      "Luteinizing hormone stimulates the Leydig cells to make testosterone, follicle-stimulating hormone supports the Sertoli cells and spermatogenesis, testosterone feeds back to inhibit luteinizing hormone, and inhibin feeds back to inhibit follicle-stimulating hormone; follicle-stimulating hormone does not make testosterone, and testosterone does not stimulate its own release.",
    choices: [
      { text: "LH stimulates the Leydig cells", isCorrect: true },
      { text: "FSH supports the Sertoli cells", isCorrect: true },
      { text: "testosterone inhibits LH release", isCorrect: true },
      { text: "inhibin inhibits FSH release", isCorrect: true },
      { text: "FSH stimulates testosterone output" },
      { text: "testosterone stimulates its own release" },
    ],
  },
  {
    stem: "Within the developing ovarian follicle, estrogen is produced mainly by the:",
    topic: "Female Reproductive Physiology",
    explanation:
      "The granulosa cells, stimulated by follicle-stimulating hormone, convert androgens supplied by the neighboring theca cells into estrogen; this two-cell cooperation builds the rising estrogen that dominates the follicular phase of the cycle.",
    choices: [
      { text: "granulosa cells of the follicle", isCorrect: true },
      { text: "theca cells of the follicle" },
      { text: "cells of the corpus luteum" },
      { text: "cells of the uterine lining" },
    ],
  },
  {
    stem: "The menstrual cycle is conventionally divided into a follicular phase, ovulation, and a:",
    topic: "Female Reproductive Physiology",
    explanation:
      "After ovulation the ruptured follicle becomes the corpus luteum, and the luteal phase begins, dominated by progesterone; this phase prepares and maintains the endometrium and, in the absence of pregnancy, ends as the corpus luteum regresses.",
    choices: [
      { text: "luteal phase", isCorrect: true },
      { text: "proliferative phase" },
      { text: "menstrual phase" },
      { text: "secretory ovulation" },
    ],
  },
  {
    stem: "Ovulation is triggered at midcycle by a sharp surge of:",
    topic: "Female Reproductive Physiology",
    explanation:
      "A brief but large surge of luteinizing hormone induces the mature follicle to rupture and release its egg; this surge is itself provoked by the preceding rise in estrogen switching to positive feedback on the pituitary.",
    choices: [
      { text: "luteinizing hormone", isCorrect: true },
      { text: "follicle-stimulating hormone" },
      { text: "progesterone" },
      { text: "human chorionic gonadotropin" },
    ],
  },
  {
    stem: "Just before ovulation, a sustained high level of estrogen exerts a brief positive feedback that:",
    topic: "Female Reproductive Physiology",
    explanation:
      "Unlike its usual inhibitory feedback, a high and sustained estrogen level near midcycle stimulates the pituitary to release the luteinizing hormone surge; this switch from negative to positive feedback is the trigger that times ovulation.",
    choices: [
      { text: "triggers the luteinizing hormone surge", isCorrect: true },
      { text: "suppresses the luteinizing hormone surge" },
      { text: "triggers the shedding of endometrium" },
      { text: "prevents the follicle from maturing" },
    ],
  },
  {
    stem: "After ovulation, the corpus luteum secretes chiefly:",
    topic: "Female Reproductive Physiology",
    explanation:
      "The corpus luteum produces mainly progesterone, with some estrogen, transforming the endometrium into a secretory, receptive state; if pregnancy does not occur, the corpus luteum regresses, progesterone falls, and the endometrium is shed.",
    choices: [
      { text: "progesterone with some estrogen", isCorrect: true },
      { text: "follicle-stimulating hormone" },
      { text: "large amounts of testosterone" },
      { text: "human chorionic gonadotropin" },
    ],
  },
  {
    stem: "Progesterone from the corpus luteum acts on the uterus to:",
    topic: "Female Reproductive Physiology",
    explanation:
      "Progesterone converts the estrogen-primed endometrium into a secretory lining ready to receive an embryo and quiets uterine contractions; it also raises basal body temperature, a change used to detect that ovulation has occurred.",
    choices: [
      { text: "make the endometrium secretory", isCorrect: true },
      { text: "make the endometrium proliferate" },
      { text: "trigger the shedding of the lining" },
      { text: "induce a new follicle to grow" },
    ],
  },
  {
    stem: "If fertilization does not occur, menstruation follows because the:",
    topic: "Female Reproductive Physiology",
    explanation:
      "Without a pregnancy signal the corpus luteum regresses after about two weeks, so progesterone and estrogen fall; the withdrawal of this hormonal support causes the endometrium to break down and shed, beginning a new cycle.",
    choices: [
      { text: "corpus luteum regresses and hormones fall", isCorrect: true },
      { text: "pituitary suddenly stops making FSH" },
      { text: "estrogen rises to a very high level" },
      { text: "progesterone rises to a very high level" },
    ],
  },
  {
    stem: "During the follicular phase, follicle-stimulating hormone drives follicle growth while the rising estrogen makes the endometrium:",
    topic: "Female Reproductive Physiology",
    explanation:
      "Estrogen in the follicular phase stimulates the endometrium to thicken and proliferate, rebuilding the lining shed at menstruation; progesterone then remodels this proliferative lining into a secretory one after ovulation.",
    choices: [
      { text: "proliferate and thicken", isCorrect: true },
      { text: "become secretory and glandular" },
      { text: "break down and shed" },
      { text: "stop growing entirely" },
    ],
  },
  {
    stem: "After menopause, the loss of ovarian follicles leads to low estrogen together with:",
    topic: "Female Reproductive Physiology",
    explanation:
      "With the follicles depleted, estrogen and inhibin fall, so their feedback is lost and the pituitary gonadotropins rise; a high follicle-stimulating hormone with low estrogen is therefore the hormonal signature of menopause.",
    choices: [
      { text: "high follicle-stimulating hormone", isCorrect: true },
      { text: "low follicle-stimulating hormone" },
      { text: "high circulating estrogen" },
      { text: "high circulating progesterone" },
    ],
  },
  {
    stem: "True or False: The midcycle luteinizing hormone surge is triggered when a sustained high estrogen level switches from negative to positive feedback on the pituitary.",
    type: "TRUE_FALSE",
    topic: "Female Reproductive Physiology",
    explanation:
      "True. For most of the cycle estrogen inhibits gonadotropin release, but when it stays high enough for long enough near midcycle, it briefly stimulates rather than suppresses the pituitary, producing the surge that causes ovulation.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which of the following occur during the luteal phase of the menstrual cycle? Select all that apply.",
    type: "MULTI",
    topic: "Female Reproductive Physiology",
    explanation:
      "In the luteal phase the corpus luteum secretes progesterone, the endometrium becomes secretory, basal body temperature rises, and progesterone with estrogen inhibits the gonadotropins; an estrogen-triggered surge and a new ovulation belong to the follicular phase and midcycle, not here.",
    choices: [
      { text: "the corpus luteum secretes progesterone", isCorrect: true },
      { text: "the endometrium becomes secretory", isCorrect: true },
      { text: "basal body temperature rises", isCorrect: true },
      { text: "progesterone inhibits LH and FSH", isCorrect: true },
      { text: "estrogen triggers an LH surge" },
      { text: "a new follicle ovulates" },
    ],
  },
  {
    stem: "In early pregnancy the corpus luteum is kept functioning, so that it continues to make progesterone, by:",
    topic: "Pregnancy & Lactation",
    explanation:
      "The implanting embryo secretes human chorionic gonadotropin, which rescues the corpus luteum from regression so it keeps producing progesterone to maintain the endometrium; later the placenta itself takes over hormone production.",
    choices: [
      { text: "human chorionic gonadotropin", isCorrect: true },
      { text: "luteinizing hormone" },
      { text: "follicle-stimulating hormone" },
      { text: "prolactin from the pituitary" },
    ],
  },
  {
    stem: "As pregnancy advances, the main source of estrogen and progesterone becomes the:",
    topic: "Pregnancy & Lactation",
    explanation:
      "After the first weeks the placenta assumes production of the large amounts of estrogen and progesterone that sustain the pregnancy, so the corpus luteum is no longer essential; this handover is why the corpus luteum can regress later without loss of the pregnancy.",
    choices: [
      { text: "placenta itself", isCorrect: true },
      { text: "maternal corpus luteum" },
      { text: "maternal anterior pituitary" },
      { text: "fetal adrenal gland alone" },
    ],
  },
  {
    stem: "Pregnancy tests detect pregnancy by measuring the hormone:",
    topic: "Pregnancy & Lactation",
    explanation:
      "Human chorionic gonadotropin, secreted by the early placenta, appears in blood and urine soon after implantation and is the target of pregnancy tests; its structure resembles luteinizing hormone, which is how it maintains the corpus luteum.",
    choices: [
      { text: "human chorionic gonadotropin", isCorrect: true },
      { text: "luteinizing hormone" },
      { text: "progesterone" },
      { text: "prolactin" },
    ],
  },
  {
    stem: "Progesterone is essential throughout pregnancy because it:",
    topic: "Pregnancy & Lactation",
    explanation:
      "Progesterone maintains the secretory endometrium and suppresses uterine contractions, keeping the uterus quiet so the pregnancy can continue; a fall in progesterone support is associated with the onset of labor and the shedding of the lining.",
    choices: [
      { text: "maintains the uterus and quiets it", isCorrect: true },
      { text: "stimulates strong uterine contractions" },
      { text: "triggers the shedding of the lining" },
      { text: "prevents the placenta from forming" },
    ],
  },
  {
    stem: "Oxytocin promotes both labor and the milk-ejection reflex by acting on:",
    topic: "Pregnancy & Lactation",
    explanation:
      "Oxytocin, released from the posterior pituitary, contracts uterine smooth muscle during labor in a positive-feedback loop and squeezes the breast alveoli to eject milk during suckling; both actions target smooth muscle rather than glandular secretion.",
    choices: [
      { text: "uterine and breast smooth muscle", isCorrect: true },
      { text: "the milk-secreting gland cells" },
      { text: "the anterior pituitary cells" },
      { text: "the ovarian follicle cells" },
    ],
  },
  {
    stem: "Milk production by the breast after birth is driven mainly by the hormone:",
    topic: "Pregnancy & Lactation",
    explanation:
      "Prolactin from the anterior pituitary stimulates the breast to synthesize milk once the high placental estrogen and progesterone, which had blocked its action, fall after delivery; suckling then sustains prolactin release to maintain the supply.",
    choices: [
      { text: "prolactin from the pituitary", isCorrect: true },
      { text: "oxytocin from the pituitary" },
      { text: "progesterone from the ovary" },
      { text: "estrogen from the placenta" },
    ],
  },
  {
    stem: "True or False: The milk-ejection, or let-down, reflex is mediated by oxytocin released in response to the infant's suckling.",
    type: "TRUE_FALSE",
    topic: "Pregnancy & Lactation",
    explanation:
      "True. Suckling sends afferent signals that trigger oxytocin release, and the oxytocin contracts the smooth muscle around the milk-filled alveoli to eject milk; prolactin, by contrast, drives the actual production of the milk.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which hormone actions in pregnancy and lactation are correctly stated? Select all that apply.",
    type: "MULTI",
    topic: "Pregnancy & Lactation",
    explanation:
      "Human chorionic gonadotropin maintains the early corpus luteum, progesterone maintains the uterus, oxytocin drives the milk-ejection reflex, and prolactin promotes milk production; prolactin does not trigger ovulation, and estrogen does not prevent implantation.",
    choices: [
      { text: "hCG maintains the early corpus luteum", isCorrect: true },
      { text: "progesterone maintains the uterus", isCorrect: true },
      { text: "oxytocin drives the milk-ejection reflex", isCorrect: true },
      { text: "prolactin promotes milk production", isCorrect: true },
      { text: "prolactin triggers ovulation" },
      { text: "estrogen prevents implantation" },
    ],
  },
  {
    stem: "The polyuria of uncontrolled diabetes mellitus results from:",
    topic: "Clinical Application",
    explanation:
      "When blood glucose exceeds the renal threshold, the filtered glucose that cannot be reabsorbed holds water in the tubule by osmosis; this osmotic diuresis causes the large urine output and, through fluid loss, the intense thirst of uncontrolled diabetes.",
    choices: [
      { text: "an osmotic diuresis from glucosuria", isCorrect: true },
      { text: "a lack of antidiuretic hormone" },
      { text: "excess secretion of aldosterone" },
      { text: "a rise in the plasma calcium" },
    ],
  },
  {
    stem: "In primary hypothyroidism, where the thyroid gland itself fails, the level of thyroid-stimulating hormone is:",
    topic: "Clinical Application",
    explanation:
      "When the gland cannot make enough thyroid hormone, the lost negative feedback lets thyroid-stimulating hormone rise; a high stimulating hormone with a low thyroid hormone therefore localizes the problem to the gland rather than the pituitary.",
    choices: [
      { text: "high because feedback is lost", isCorrect: true },
      { text: "low because the pituitary fails" },
      { text: "normal despite the low hormone" },
      { text: "undetectable in the blood" },
    ],
  },
  {
    stem: "Episodic hypertension with palpitations, sweating, and headache from a catecholamine-secreting tumor suggests a:",
    topic: "Clinical Application",
    explanation:
      "A pheochromocytoma of the adrenal medulla releases surges of catecholamines that cause paroxysms of hypertension, palpitations, sweating, and headache; recognizing the pattern is important because the tumor is a treatable cause of severe hypertension.",
    choices: [
      { text: "pheochromocytoma of the adrenal", isCorrect: true },
      { text: "primary hypothyroid state" },
      { text: "deficiency of cortisol" },
      { text: "excess of parathyroid hormone" },
    ],
  },
  {
    stem: "A patient with fatigue, weight gain, cold intolerance, a slow pulse, and a raised thyroid-stimulating hormone most likely has:",
    topic: "Clinical Application",
    explanation:
      "The combination of a slowed metabolism with a high stimulating hormone points to failure of the thyroid gland itself; recognizing primary hypothyroidism matters because it is readily corrected by replacing the missing thyroid hormone.",
    choices: [
      { text: "primary hypothyroidism", isCorrect: true },
      { text: "primary hyperthyroidism" },
      { text: "Cushing syndrome" },
      { text: "Addison's disease" },
    ],
  },
  {
    stem: "A patient with central obesity, a rounded face, hypertension, high blood glucose, and easy bruising most likely has:",
    topic: "Clinical Application",
    explanation:
      "These features reflect chronic cortisol excess acting on fat distribution, blood pressure, glucose, and connective tissue; identifying Cushing syndrome directs the search toward a pituitary, adrenal, or ectopic source of the excess hormone.",
    choices: [
      { text: "Cushing syndrome", isCorrect: true },
      { text: "Addison's disease" },
      { text: "hypothyroidism" },
      { text: "diabetes insipidus" },
    ],
  },
  {
    stem: "A patient with fatigue, low blood pressure, salt craving, darkened skin, and a high potassium most likely has:",
    topic: "Clinical Application",
    explanation:
      "Loss of both cortisol and aldosterone with a compensatory rise in adrenocorticotropic hormone explains the fatigue, hypotension, salt craving, hyperpigmentation, and hyperkalemia; this primary adrenal insufficiency, Addison's disease, can be life-threatening if untreated.",
    choices: [
      { text: "Addison's disease", isCorrect: true },
      { text: "Cushing syndrome" },
      { text: "hyperthyroidism" },
      { text: "acromegaly" },
    ],
  },
  {
    stem: "True or False: When an endocrine target gland fails at its own level, the corresponding pituitary tropic hormone rises because feedback inhibition is lost.",
    type: "TRUE_FALSE",
    topic: "Clinical Application",
    explanation:
      "True. In primary target-gland failure the missing hormone no longer suppresses the pituitary, so the tropic hormone climbs; measuring that tropic hormone thus distinguishes a primary gland problem from a pituitary or hypothalamic cause.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which laboratory findings fit primary hypothyroidism? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Application",
    explanation:
      "Primary hypothyroidism shows a low free thyroxine with a high thyroid-stimulating hormone, a reduced basal metabolic rate, and often a raised cholesterol; a low stimulating hormone or a high metabolic rate would instead suggest a pituitary cause or hyperthyroidism.",
    choices: [
      { text: "a low free thyroxine level", isCorrect: true },
      { text: "a high thyroid-stimulating hormone", isCorrect: true },
      { text: "a reduced basal metabolic rate", isCorrect: true },
      { text: "a raised serum cholesterol", isCorrect: true },
      { text: "a low thyroid-stimulating hormone" },
      { text: "a high basal metabolic rate" },
    ],
  },
];
