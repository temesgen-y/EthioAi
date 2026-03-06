import { ServicePageTemplate } from '@/components/sections/service-page-template';
import { JsonLd } from '@/components/seo/json-ld';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/structured-data';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Machine Learning',
  description:
    'Machine learning solutions company. Data-driven models for prediction, classification. Production ML pipelines with TensorFlow and PyTorch.',
  path: '/services/machine-learning',
  keywords: ['machine learning solutions', 'ML pipelines'],
  ogTitle: 'Machine Learning | EthioTech AI Solutions',
});

export default function MachineLearningPage() {
  const serviceSchema = getServiceSchema({
    name: 'Machine Learning',
    description:
      'Data-driven models that predict, classify, and recommend—powered by proven ML frameworks.',
    path: '/services/machine-learning',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Machine Learning', url: '/services/machine-learning' },
  ]);

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
    <ServicePageTemplate
      slug="machine-learning"
      title="Machine Learning"
      problem="Your data holds patterns that could drive better decisions—churn prediction, demand forecasting, fraud detection, personalization. But building ML systems requires expertise in data engineering, model training, and production deployment. Most teams lack the bandwidth."
      solution="We build end-to-end ML pipelines: data ingestion, feature engineering, model training and evaluation, and production deployment. Models are versioned, monitored, and retrained as needed. We focus on interpretability and robustness, not just accuracy."
      techStack={[
        'Python',
        'Scikit-learn',
        'XGBoost',
        'TensorFlow',
        'MLflow',
        'Kubernetes',
      ]}
      processSteps={[
        {
          title: 'Data Assessment',
          description: 'Data quality, availability, and suitability for ML.',
        },
        {
          title: 'Feature Engineering',
          description: 'Transform raw data into model-ready features.',
        },
        {
          title: 'Model Development',
          description: 'Train, validate, and compare models.',
        },
        {
          title: 'Pipeline & Deployment',
          description: 'Production ML pipelines with CI/CD.',
        },
        {
          title: 'Monitoring & Retraining',
          description: 'Track performance and trigger retraining when needed.',
        },
      ]}
      engagementModels={[
        {
          title: 'ML Consulting',
          description:
            'Strategy, feasibility, and architecture for ML initiatives.',
        },
        {
          title: 'Model Development',
          description:
            'Build and deploy custom ML models for your use case.',
        },
        {
          title: 'MLOps Support',
          description:
            'Maintain and improve production ML systems.',
        },
      ]}
    />
    </>
  );
}
