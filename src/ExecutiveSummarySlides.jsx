import React, { useState, useEffect } from 'react';
import mermaid from 'mermaid';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowRight, Check, X, AlertTriangle, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';

const Slide = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-12 transition-colors duration-300">
    <h2 className="text-3xl font-display font-bold mb-6 text-primary-800 dark:text-primary-300">{title}</h2>
    {children}
  </div>
);

const TalkingPoint = ({ children }) => (
  <div className="flex items-start mt-4">
    <ArrowRight className="text-primary-500 dark:text-primary-400 mr-3 mt-1 flex-shrink-0" />
    <p className="text-secondary-700 dark:text-secondary-300">{children}</p>
  </div>
);

const FlowChartBox = ({ children, color = "bg-primary-100" }) => (
  <div className={`${color} dark:bg-gray-700 border border-primary-300 dark:border-primary-600 rounded-lg p-3 text-center font-medium text-primary-800 dark:text-primary-200 transition-colors duration-300`}>
    {children}
  </div>
);

const FlowChartArrow = () => (
  <div className="flex justify-center my-3">
    <ArrowDown className="text-primary-400 dark:text-primary-500" />
  </div>
);

const awsData = [
  { name: 'p66usorg', items: 2556, accounts: 90 },
  { name: 'p66germanyorg', items: 983, accounts: 35 },
  { name: 'p66ukorg', items: 958, accounts: 34 },
  { name: 'p66sandboxorg', items: 337, accounts: 13 },
];

const azureData = [
  { name: 'Front Door WAF', policies: 22 },
  { name: 'App Gateway WAF', policies: 19 },
];

const wafVersionData = [
  { name: 'AWS WAF v2', value: 99.15 },
  { name: 'AWS WAF v1', value: 0.83 },
  { name: 'Unknown', value: 0.02 },
];

const implementationTimelineData = [
  { name: 'Assessment', months: 3 },
  { name: 'Enhanced Management', months: 3 },
  { name: 'Advanced Security', months: 6 },
  { name: 'Optimization', months: 6 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ExecutiveSummarySlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: "Project Overview", component: ProjectOverviewSlide },
    { title: "Current State Analysis", component: CurrentStateAnalysisSlide },
    { title: "Key Findings", component: KeyFindingsSlide },
    { title: "Security Posture Assessment", component: SecurityPostureAssessmentSlide },
    { title: "Recommendations", component: RecommendationsSlide },
    { title: "Implementation Roadmap", component: ImplementationRoadmapSlide },
    { title: "Current WAF Management Flow", component: CurrentWAFManagementFlowSlide },
    { title: "Centralized WAF Management Solution", component: CentralizedWAFManagementSolutionSlide },
    { title: "Technical Implementation", component: TechnicalImplementationSlide },
    { title: "Addressing Key Issues", component: AddressingKeyIssuesSlide },
    { title: "Enhanced WAF Operational Flow", component: EnhancedWAFOperationalFlowSlide },
    { title: "Key Performance Indicators", component: KeyPerformanceIndicatorsSlide },
    { title: "Expected Outcomes", component: ExpectedOutcomesSlide },
    { title: "Next Steps", component: NextStepsSlide },
    { title: "WAF Architecture Diagrams", component: WAFArchitectureDiagrams },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="p-8 min-h-screen flex flex-col transition-colors duration-300">
      <h1 className="text-5xl font-display font-bold mb-12 text-center text-primary-900 dark:text-primary-100">
        P66 Cross-Cloud WAF Analysis: Enhanced Executive Summary
      </h1>
      
      <div className="flex-grow flex flex-col justify-center">
        <Slide title={slides[currentSlide].title}>
          <CurrentSlideComponent />
        </Slide>
      </div>
      
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={prevSlide}
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-full flex items-center transition-colors duration-300"
        >
          <ChevronLeft className="mr-2" /> Previous
        </button>
        <span className="text-secondary-600 dark:text-secondary-400">
          {currentSlide + 1} / {slides.length}
        </span>
        <button
          onClick={nextSlide}
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-full flex items-center transition-colors duration-300"
        >
          Next <ChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

const ProjectOverviewSlide = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-lg transition-colors duration-300">
      <h3 className="font-display font-semibold text-xl mb-4 text-primary-800 dark:text-primary-200">Scope</h3>
      <ul className="list-disc pl-6 space-y-2 text-secondary-700 dark:text-secondary-300">
        <li>Comprehensive analysis of WAF implementations</li>
        <li>AWS and Azure cloud environments</li>
        <li>4,834 AWS WAF items across 172 accounts</li>
        <li>41 Azure WAF policies across multiple subscriptions</li>
      </ul>
    </div>
    <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-lg transition-colors duration-300">
      <h3 className="font-display font-semibold text-xl mb-4 text-primary-800 dark:text-primary-200">Objectives</h3>
      <ul className="list-disc pl-6 space-y-2 text-secondary-700 dark:text-secondary-300">
        <li>Assess current WAF security posture</li>
        <li>Identify gaps and inconsistencies</li>
        <li>Provide actionable recommendations</li>
        <li>Develop cross-cloud WAF strategy</li>
      </ul>
    </div>
  </div>
);

const CurrentStateAnalysisSlide = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h3 className="font-display font-semibold text-xl mb-4 text-primary-800 dark:text-primary-200">AWS WAF Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={awsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="items" fill="#8884d8" name="WAF Items" />
          <Bar yAxisId="right" dataKey="accounts" fill="#82ca9d" name="AWS Accounts" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div>
      <h3 className="font-display font-semibold text-xl mb-4 text-primary-800 dark:text-primary-200">Azure WAF Policies</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={azureData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="policies"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {azureData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const KeyFindingsSlide = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h3 className="font-display font-semibold text-xl mb-4 text-primary-800 dark:text-primary-200">AWS WAF Version Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={wafVersionData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, value }) => `${name} ${value}%`}
          >
            {wafVersionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
    <div>
      <h3 className="font-display font-semibold text-xl mb-4 text-primary-800 dark:text-primary-200">Critical Observations</h3>
      <ul className="space-y-2">
        <li className="flex items-center">
          <Check className="text-green-500 mr-2" />
          <span className="text-secondary-700 dark:text-secondary-300">Strong adoption of AWS WAF v2 (99.15%)</span>
        </li>
        <li className="flex items-center">
          <AlertTriangle className="text-yellow-500 mr-2" />
          <span className="text-secondary-700 dark:text-secondary-300">Mix of Classic and Standard SKUs in Azure</span>
        </li>
        <li className="flex items-center">
          <X className="text-red-500 mr-2" />
          <span className="text-secondary-700 dark:text-secondary-300">Inconsistent default actions in AWS</span>
        </li>
        <li className="flex items-center">
          <AlertTriangle className="text-yellow-500 mr-2" />
          <span className="text-secondary-700 dark:text-secondary-300">Complex custom rules in Azure requiring management</span>
        </li>
      </ul>
    </div>
  </div>
);

const SecurityPostureAssessmentSlide = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h3 className="font-display font-semibold text-xl mb-4 text-primary-800 dark:text-primary-200">Strengths</h3>
      <ul className="list-disc pl-6 space-y-2 text-secondary-700 dark:text-secondary-300">
        <li>Extensive use of Managed Rule Sets in both clouds</li>
        <li>Strong OWASP Top 10 coverage</li>
        <li>Comprehensive custom rules in Azure for specific apps</li>
      </ul>
    </div>
    <div>
      <h3 className="font-display font-semibold text-xl mb-4 text-primary-800 dark:text-primary-200">Areas for Improvement</h3>
      <ul className="list-disc pl-6 space-y-2 text-secondary-700 dark:text-secondary-300">
        <li>Standardize WAF versions and SKUs</li>
        <li>Align security practices across cloud providers</li>
        <li>Enhance cross-cloud logging and monitoring</li>
        <li>Implement consistent IP reputation management</li>
      </ul>
    </div>
  </div>
);

const RecommendationsSlide = () => (
  <div className="space-y-4">
    <div className="flex items-start">
      <div className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">1</div>
      <p className="text-secondary-700 dark:text-secondary-300"><strong>Standardize WAF Configurations:</strong> Align versions, SKUs, and baseline rules across AWS and Azure</p>
    </div>
    <div className="flex items-start">
      <div className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">2</div>
      <p className="text-secondary-700 dark:text-secondary-300"><strong>Implement Cross-Cloud Management:</strong> Centralize WAF control and monitoring for both environments</p>
    </div>
    <div className="flex items-start">
      <div className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">3</div>
      <p className="text-secondary-700 dark:text-secondary-300"><strong>Enhance Logging and Monitoring:</strong> Implement comprehensive, cross-cloud visibility</p>
    </div>
    <div className="flex items-start">
      <div className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">4</div>
      <p className="text-secondary-700 dark:text-secondary-300"><strong>Standardize Bot Protection:</strong> Implement consistent bot management across cloud providers</p>
    </div>
    <div className="flex items-start">
      <div className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">5</div>
      <p className="text-secondary-700 dark:text-secondary-300"><strong>Regular Security Posture Assessments:</strong> Conduct cross-cloud WAF audits and penetration testing</p>
    </div>
  </div>
);

const ImplementationRoadmapSlide = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={implementationTimelineData}
      layout="vertical"
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Legend />
      <Bar dataKey="months" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);

const CurrentWAFManagementFlowSlide = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h3 className="font-display font-semibold text-xl mb-4 text-primary-800 dark:text-primary-200">AWS WAF Management</h3>
      <FlowChartBox>AWS Console / CLI / API</FlowChartBox>
      <FlowChartArrow />
      <FlowChartBox>Web ACLs</FlowChartBox>
      <FlowChartArrow />
      <FlowChartBox>Rule Groups</FlowChartBox>
      <FlowChartArrow />
      <FlowChartBox>AWS Resources (CloudFront, ALB, API Gateway)</FlowChartBox>
    </div>
    <div>
      <h3 className="font-display font-semibold text-xl mb-4 text-primary-800 dark:text-primary-200">Azure WAF Management</h3>
      <FlowChartBox>Azure Portal / CLI / API</FlowChartBox>
      <FlowChartArrow />
      <FlowChartBox>WAF Policies</FlowChartBox>
      <FlowChartArrow />
      <FlowChartBox>Custom Rules</FlowChartBox>
      <FlowChartArrow />
      <FlowChartBox>Azure Resources (Front Door, App Gateway)</FlowChartBox>
    </div>
  </div>
);

const CentralizedWAFManagementSolutionSlide = () => (
  <div className="space-y-4">
    <FlowChartBox color="bg-green-100 dark:bg-green-700">Centralized WAF Management Platform</FlowChartBox>
    <FlowChartArrow />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <FlowChartBox>AWS WAF API</FlowChartBox>
        <FlowChartArrow />
        <FlowChartBox>AWS WAF Resources</FlowChartBox>
      </div>
      <div>
        <FlowChartBox>Azure WAF API</FlowChartBox>
        <FlowChartArrow />
        <FlowChartBox>Azure WAF Resources</FlowChartBox>
      </div>
    </div>
    <FlowChartArrow />
    <FlowChartBox color="bg-yellow-100 dark:bg-yellow-700">Unified Logging and Monitoring</FlowChartBox>
  </div>
);

const TechnicalImplementationSlide = () => (
  <div className="space-y-4">
    <h3 className="font-display font-semibold text-xl mb-4 text-primary-800 dark:text-primary-200">Key Components:</h3>
    <ol className="list-decimal pl-6 space-y-2 text-secondary-700 dark:text-secondary-300">
      <li><strong>Multi-Cloud Orchestration Tool:</strong> Terraform or Ansible for infrastructure-as-code management</li>
      <li><strong>Central Management API:</strong> Custom-developed RESTful API to abstract cloud-specific operations</li>
      <li><strong>Configuration Repository:</strong> Git-based version control for WAF configurations</li>
      <li><strong>CI/CD Pipeline:</strong> Jenkins or GitLab CI for automated testing and deployment of WAF changes</li>
      <li><strong>Unified Logging:</strong> ELK Stack (Elasticsearch, Logstash, Kibana) or Splunk for log aggregation and analysis</li>
    </ol>
    <h3 className="font-display font-semibold text-xl mb-4 text-primary-800 dark:text-primary-200 mt-4">Implementation Steps:</h3>
    <ol className="list-decimal pl-6 space-y-2 text-secondary-700 dark:text-secondary-300">
      <li>Develop central management API to interface with AWS and Azure WAF APIs</li>
      <li>Create Terraform modules for standardized WAF deployments across clouds</li>
      <li>Set up Git repository for WAF configurations with branch protection and review processes</li>
      <li>Implement CI/CD pipeline for automated testing and deployment of WAF changes</li>
      <li>Configure log shipping from both cloud providers to central logging platform</li>
      <li>Develop custom dashboards and alerts in unified monitoring solution</li>
    </ol>
  </div>
);

const AddressingKeyIssuesSlide = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h3 className="font-display font-semibold text-xl mb-4 text-primary-800 dark:text-primary-200">1. Version Standardization</h3>
      <ul className="list-disc pl-6 space-y-2 text-secondary-700 dark:text-secondary-300">
        <li>Use AWS WAF API to identify and list all v1 Web ACLs</li>
        <li>Develop migration script using AWS WAF v2 API to recreate rules</li>
        <li>Implement in phases, starting with non-production environments</li>
        <li>Use Azure Resource Manager API to standardize WAF policy SKUs</li>
      </ul>
    </div>
    <div>
      <h3 className="font-display font-semibold text-xl mb-4 text-primary-800 dark:text-primary-200">2. Rule Consistency</h3>
      <ul className="list-disc pl-6 space-y-2 text-secondary-700 dark:text-secondary-300">
        <li>Create mapping of AWS Managed Rules to Azure Managed Rule Sets</li>
        <li>Develop templates for common custom rules applicable to both clouds</li>
        <li>Implement rule sync feature in central management API</li>
        <li>Use tagging for easy identification of synchronized rules</li>
      </ul>
    </div>
  </div>
);

const EnhancedWAFOperationalFlowSlide = () => (
  <div className="space-y-4">
    <FlowChartBox color="bg-purple-100 dark:bg-purple-700">Security Team: Rule Creation/Update Request</FlowChartBox>
    <FlowChartArrow />
    <FlowChartBox color="bg-blue-100 dark:bg-blue-700">Central Management API: Validate and Process Request</FlowChartBox>
    <FlowChartArrow />
    <FlowChartBox color="bg-green-100 dark:bg-green-700">Git Repository: Update WAF Configuration</FlowChartBox>
    <FlowChartArrow />
    <FlowChartBox color="bg-yellow-100 dark:bg-yellow-700">CI/CD Pipeline: Test and Stage Changes</FlowChartBox>
    <FlowChartArrow />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <FlowChartBox>Deploy to AWS WAF</FlowChartBox>
      <FlowChartBox>Deploy to Azure WAF</FlowChartBox>
    </div>
    <FlowChartArrow />
    <FlowChartBox color="bg-red-100 dark:bg-red-700">Unified Monitoring: Validate and Alert</FlowChartBox>
  </div>
);

const KeyPerformanceIndicatorsSlide = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h3 className="font-display font-semibold text-xl mb-4 text-primary-800 dark:text-primary-200">Security KPIs</h3>
      <ul className="list-disc pl-6 space-y-2 text-secondary-700 dark:text-secondary-300">
        <li>Number of blocked attacks per day</li>
        <li>False positive rate</li>
        <li>Average time to mitigate new threats</li>
        <li>Percentage of traffic scanned by WAF</li>
      </ul>
    </div>
    <div>
      <h3 className="font-display font-semibold text-xl mb-4 text-primary-800 dark:text-primary-200">Operational KPIs</h3>
      <ul className="list-disc pl-6 space-y-2 text-secondary-700 dark:text-secondary-300">
        <li>WAF rule deployment time</li>
        <li>Number of manual vs. automated rule updates</li>
        <li>Time spent on WAF management per week</li>
        <li>WAF configuration compliance rate</li>
      </ul>
    </div>
  </div>
);

const ExpectedOutcomesSlide = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h3 className="font-display font-semibold text-xl mb-4 text-primary-800 dark:text-primary-200">Security Benefits</h3>
      <ul className="list-disc pl-6 space-y-2 text-secondary-700 dark:text-secondary-300">
        <li>Enhanced protection against web application threats</li>
        <li>Improved visibility and control across cloud environments</li>
        <li>Faster response to emerging threats</li>
        <li>Reduced risk of data breaches and compliance violations</li>
      </ul>
    </div>
    <div>
      <h3 className="font-display font-semibold text-xl mb-4 text-primary-800 dark:text-primary-200">Operational Improvements</h3>
      <ul className="list-disc pl-6 space-y-2 text-secondary-700 dark:text-secondary-300">
        <li>Streamlined WAF management processes</li>
        <li>Reduced complexity in multi-cloud operations</li>
        <li>Improved collaboration between security and cloud teams</li>
        <li>Enhanced ability to meet compliance requirements</li>
      </ul>
    </div>
  </div>
);

const NextStepsSlide = () => (
  <ol className="list-decimal pl-6 space-y-2 text-secondary-700 dark:text-secondary-300">
    <li>Secure executive sponsorship for the cross-cloud WAF initiative</li>
    <li>Allocate resources for the implementation team</li>
    <li>Begin detailed planning for Phase 1: Assessment and Standardization</li>
    <li>Schedule kick-off meeting with key stakeholders from security and cloud teams</li>
    <li>Establish regular progress review cadence</li>
  </ol>
);

const MermaidDiagram = ({ chart }) => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'neutral',
      flowchart: {
        curve: 'basis',
        padding: 20,
      },
      themeCSS: `
        .node rect { fill: #f4f4f4; stroke: #999; stroke-width: 1px; }
        .node text { font-size: 14px; font-weight: 300; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; }
        .edgePath path { stroke: #666; stroke-width: 1.5px; }
        .cluster rect { fill: #f0f0f0; stroke: #999; stroke-width: 1px; }
      `,
      fontSize: 18,
    });
    mermaid.contentLoaded();
  }, [chart]);

  return (
    <div className="mermaid-wrapper w-full overflow-x-auto my-8">
      <div className="mermaid text-center" style={{ minWidth: '800px', width: '100%', height: 'auto' }}>{chart}</div>
    </div>
  );
};

const WAFArchitectureDiagrams = () => {
  const currentAWSWAF = `
    graph TD
      A[Internet] --> B[CloudFront Distribution]
      A --> C[Application Load Balancer]
      B --> D[AWS WAF]
      C --> E[AWS WAF]
      D --> F[Web ACLs]
      E --> G[Web ACLs]
      F --> H[Protected Resources<br/>S3, API Gateway]
      G --> I[Protected Resources<br/>EC2, ECS/EKS]
      J[AWS WAF Dashboard] --> D
      J --> E
      K[CloudWatch Logs] --> D
      K --> E

      classDef default fill:#f9f9f9,stroke:#333,stroke-width:1px;
      classDef highlight fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
      class D,E highlight;
  `;

  const currentAzureWAF = `
    graph TD
      A[Internet] --> B[Azure Front Door]
      A --> C[Application Gateway]
      B --> D[Azure WAF Policy]
      C --> E[Azure WAF Policy]
      D --> F[WAF Policy Components]
      E --> G[WAF Policy Components]
      F --> H[Protected Resources<br/>App Service, Azure Functions]
      G --> I[Protected Resources<br/>VM Scale Sets, AKS Clusters]
      J[Azure Security Center] --> D
      J --> E
      K[Azure Monitor] --> D
      K --> E

      classDef default fill:#f9f9f9,stroke:#333,stroke-width:1px;
      classDef highlight fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px;
      class D,E highlight;
  `;

  const proposedUnifiedWAF = `
    graph TD
      A[Internet] --> B[AWS Resources]
      A --> C[Azure Resources]
      B --> D[AWS WAF]
      C --> E[Azure WAF]
      D --> F[Centralized WAF<br/>Management Platform]
      E --> F
      F --> G[Unified Components]
      G --> H[Management Interfaces]
      H --> I[DevOps Teams]
      H --> J[Security Teams]
      K[SIEM Integration] --> F
      L[Threat Intelligence<br/>Feed Integration] --> F
      M[CI/CD Pipeline<br/>Integration] --> F
      N[Automated Compliance<br/>Reporting] --> F

      classDef default fill:#f9f9f9,stroke:#333,stroke-width:1px;
      classDef highlight fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;
      class F highlight;
  `;

  return (
    <div className="space-y-16">
      <div>
        <h3 className="text-3xl font-bold mb-6 text-center">Current AWS WAF Architecture</h3>
        <MermaidDiagram chart={currentAWSWAF} />
      </div>
      <div>
        <h3 className="text-3xl font-bold mb-6 text-center">Current Azure WAF Architecture</h3>
        <MermaidDiagram chart={currentAzureWAF} />
      </div>
      <div>
        <h3 className="text-3xl font-bold mb-6 text-center">Proposed Unified WAF Architecture</h3>
        <MermaidDiagram chart={proposedUnifiedWAF} />
      </div>
    </div>
  );
};

export default ExecutiveSummarySlides;