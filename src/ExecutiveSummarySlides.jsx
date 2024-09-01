import React, { useState, useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowRight, Check, X, AlertTriangle, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Slide = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-800 p-6 sm:p-10 rounded-2xl shadow-xl mb-8 sm:mb-12 transition-all duration-300 hover:shadow-2xl"
  >
    <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 sm:mb-8 text-primary-800 dark:text-primary-300 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">{title}</h2>
    {children}
  </motion.div>
);

const TalkingPoint = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-start mt-4 sm:mt-6"
  >
    <ArrowRight className="text-primary-500 dark:text-primary-400 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
    <p className="text-secondary-700 dark:text-secondary-300 text-base sm:text-lg">{children}</p>
  </motion.div>
);

const FlowChartBox = ({ children, color = "bg-primary-100" }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`${color} dark:bg-gray-700 border-2 border-primary-300 dark:border-primary-600 rounded-xl p-4 sm:p-5 text-center font-medium text-primary-800 dark:text-primary-200 transition-all duration-300 text-base sm:text-lg shadow-md hover:shadow-lg`}
  >
    {children}
  </motion.div>
);

const FlowChartArrow = () => (
  <div className="flex justify-center my-3 sm:my-4">
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <ArrowDown className="text-primary-400 dark:text-primary-500 w-8 h-8" />
    </motion.div>
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
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const slideRef = useRef(null);

  // Define all slide components
  const ProjectOverviewSlide = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="bg-primary-50 dark:bg-gray-700 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:shadow-lg">
        <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-4 sm:mb-6 text-primary-800 dark:text-primary-200">Scope</h3>
        <ul className="list-disc pl-6 space-y-2 text-secondary-700 dark:text-secondary-300 text-base sm:text-lg">
          <li>Comprehensive analysis of WAF implementations</li>
          <li>AWS and Azure cloud environments</li>
          <li>4,834 AWS WAF items across 172 accounts</li>
          <li>41 Azure WAF policies across multiple subscriptions</li>
        </ul>
      </div>
      <div className="bg-primary-50 dark:bg-gray-700 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:shadow-lg">
        <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-4 sm:mb-6 text-primary-800 dark:text-primary-200">Objectives</h3>
        <ul className="list-disc pl-6 space-y-2 text-secondary-700 dark:text-secondary-300 text-base sm:text-lg">
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
        <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-6 sm:mb-8 text-primary-800 dark:text-primary-200">AWS WAF Distribution</h3>
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
        <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-6 sm:mb-8 text-primary-800 dark:text-primary-200">Azure WAF Policies</h3>
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
        <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-6 sm:mb-8 text-primary-800 dark:text-primary-200">AWS WAF Version Distribution</h3>
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
        <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-6 sm:mb-8 text-primary-800 dark:text-primary-200">Critical Observations</h3>
        <ul className="space-y-4">
          <li className="flex items-center">
            <Check className="text-green-500 mr-3" />
            <span className="text-secondary-700 dark:text-secondary-300 text-base sm:text-lg">Strong adoption of AWS WAF v2 (99.15%)</span>
          </li>
          <li className="flex items-center">
            <AlertTriangle className="text-yellow-500 mr-3" />
            <span className="text-secondary-700 dark:text-secondary-300 text-base sm:text-lg">Mix of Classic and Standard SKUs in Azure</span>
          </li>
          <li className="flex items-center">
            <X className="text-red-500 mr-3" />
            <span className="text-secondary-700 dark:text-secondary-300 text-base sm:text-lg">Inconsistent default actions in AWS</span>
          </li>
          <li className="flex items-center">
            <AlertTriangle className="text-yellow-500 mr-3" />
            <span className="text-secondary-700 dark:text-secondary-300 text-base sm:text-lg">Complex custom rules in Azure requiring management</span>
          </li>
        </ul>
      </div>
    </div>
  );

  const SecurityPostureAssessmentSlide = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-6 sm:mb-8 text-primary-800 dark:text-primary-200">Strengths</h3>
        <ul className="list-disc pl-6 space-y-2 text-secondary-700 dark:text-secondary-300 text-base sm:text-lg">
          <li>Extensive use of Managed Rule Sets in both clouds</li>
          <li>Strong OWASP Top 10 coverage</li>
          <li>Comprehensive custom rules in Azure for specific apps</li>
        </ul>
      </div>
      <div>
        <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-6 sm:mb-8 text-primary-800 dark:text-primary-200">Areas for Improvement</h3>
        <ul className="list-disc pl-6 space-y-2 text-secondary-700 dark:text-secondary-300 text-base sm:text-lg">
          <li>Standardize WAF versions and SKUs</li>
          <li>Align security practices across cloud providers</li>
          <li>Enhance cross-cloud logging and monitoring</li>
          <li>Implement consistent IP reputation management</li>
        </ul>
      </div>
    </div>
  );

  const RecommendationsSlide = () => (
    <div className="space-y-6">
      <div className="flex items-start">
        <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
        <p className="text-secondary-700 dark:text-secondary-300 text-base sm:text-lg"><strong>Standardize WAF Configurations:</strong> Align versions, SKUs, and baseline rules across AWS and Azure</p>
      </div>
      <div className="flex items-start">
        <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
        <p className="text-secondary-700 dark:text-secondary-300 text-base sm:text-lg"><strong>Implement Cross-Cloud Management:</strong> Centralize WAF control and monitoring for both environments</p>
      </div>
      <div className="flex items-start">
        <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
        <p className="text-secondary-700 dark:text-secondary-300 text-base sm:text-lg"><strong>Enhance Logging and Monitoring:</strong> Implement comprehensive, cross-cloud visibility</p>
      </div>
      <div className="flex items-start">
        <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</div>
        <p className="text-secondary-700 dark:text-secondary-300 text-base sm:text-lg"><strong>Standardize Bot Protection:</strong> Implement consistent bot management across cloud providers</p>
      </div>
      <div className="flex items-start">
        <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">5</div>
        <p className="text-secondary-700 dark:text-secondary-300 text-base sm:text-lg"><strong>Regular Security Posture Assessments:</strong> Conduct cross-cloud WAF audits and penetration testing</p>
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
        <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-6 sm:mb-8 text-primary-800 dark:text-primary-200">AWS WAF Management</h3>
        <FlowChartBox>AWS Console / CLI / API</FlowChartBox>
        <FlowChartArrow />
        <FlowChartBox>Web ACLs</FlowChartBox>
        <FlowChartArrow />
        <FlowChartBox>Rule Groups</FlowChartBox>
        <FlowChartArrow />
        <FlowChartBox>AWS Resources (CloudFront, ALB, API Gateway)</FlowChartBox>
      </div>
      <div>
        <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-6 sm:mb-8 text-primary-800 dark:text-primary-200">Azure WAF Management</h3>
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
    <div className="space-y-6">
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
    <div className="space-y-6">
      <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-6 sm:mb-8 text-primary-800 dark:text-primary-200">Key Components:</h3>
      <ol className="list-decimal pl-6 space-y-2 text-secondary-700 dark:text-secondary-300 text-base sm:text-lg">
        <li><strong>Multi-Cloud Orchestration Tool:</strong> Terraform or Ansible for infrastructure-as-code management</li>
        <li><strong>Central Management API:</strong> Custom-developed RESTful API to abstract cloud-specific operations</li>
        <li><strong>Configuration Repository:</strong> Git-based version control for WAF configurations</li>
        <li><strong>CI/CD Pipeline:</strong> Jenkins or GitLab CI for automated testing and deployment of WAF changes</li>
        <li><strong>Unified Logging:</strong> ELK Stack (Elasticsearch, Logstash, Kibana) or Splunk for log aggregation and analysis</li>
      </ol>
      <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-6 sm:mb-8 text-primary-800 dark:text-primary-200 mt-8">Implementation Steps:</h3>
      <ol className="list-decimal pl-6 space-y-2 text-secondary-700 dark:text-secondary-300 text-base sm:text-lg">
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
        <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-6 sm:mb-8 text-primary-800 dark:text-primary-200">1. Version Standardization</h3>
        <ul className="list-disc pl-6 space-y-2 text-secondary-700 dark:text-secondary-300 text-base sm:text-lg">
          <li>Use AWS WAF API to identify and list all v1 Web ACLs</li>
          <li>Develop migration script using AWS WAF v2 API to recreate rules</li>
          <li>Implement in phases, starting with non-production environments</li>
          <li>Use Azure Resource Manager API to standardize WAF policy SKUs</li>
        </ul>
      </div>
      <div>
        <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-6 sm:mb-8 text-primary-800 dark:text-primary-200">2. Rule Consistency</h3>
        <ul className="list-disc pl-6 space-y-2 text-secondary-700 dark:text-secondary-300 text-base sm:text-lg">
          <li>Create mapping of AWS Managed Rules to Azure Managed Rule Sets</li>
          <li>Develop templates for common custom rules applicable to both clouds</li>
          <li>Implement rule sync feature in central management API</li>
          <li>Use tagging for easy identification of synchronized rules</li>
        </ul>
      </div>
    </div>
  );

  const EnhancedWAFOperationalFlowSlide = () => (
    <div className="space-y-6">
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
        <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-6 sm:mb-8 text-primary-800 dark:text-primary-200">Security KPIs</h3>
        <ul className="list-disc pl-6 space-y-2 text-secondary-700 dark:text-secondary-300 text-base sm:text-lg">
          <li>Number of blocked attacks per day</li>
          <li>False positive rate</li>
          <li>Average time to mitigate new threats</li>
          <li>Percentage of traffic scanned by WAF</li>
        </ul>
      </div>
      <div>
        <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-6 sm:mb-8 text-primary-800 dark:text-primary-200">Operational KPIs</h3>
        <ul className="list-disc pl-6 space-y-2 text-secondary-700 dark:text-secondary-300 text-base sm:text-lg">
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
        <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-6 sm:mb-8 text-primary-800 dark:text-primary-200">Security Benefits</h3>
        <ul className="list-disc pl-6 space-y-2 text-secondary-700 dark:text-secondary-300 text-base sm:text-lg">
          <li>Enhanced protection against web application threats</li>
          <li>Improved visibility and control across cloud environments</li>
          <li>Faster response to emerging threats</li>
          <li>Reduced risk of data breaches and compliance violations</li>
        </ul>
      </div>
      <div>
        <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-6 sm:mb-8 text-primary-800 dark:text-primary-200">Operational Improvements</h3>
        <ul className="list-disc pl-6 space-y-2 text-secondary-700 dark:text-secondary-300 text-base sm:text-lg">
          <li>Streamlined WAF management processes</li>
          <li>Reduced complexity in multi-cloud operations</li>
          <li>Improved collaboration between security and cloud teams</li>
          <li>Enhanced ability to meet compliance requirements</li>
        </ul>
      </div>
    </div>
  );

  const NextStepsSlide = () => (
    <ol className="list-decimal pl-6 space-y-2 text-secondary-700 dark:text-secondary-300 text-base sm:text-lg">
      <li>Secure executive sponsorship for the cross-cloud WAF initiative</li>
      <li>Allocate resources for the implementation team</li>
      <li>Begin detailed planning for Phase 1: Assessment and Standardization</li>
      <li>Schedule kick-off meeting with key stakeholders from security and cloud teams</li>
      <li>Establish regular progress review cadence</li>
    </ol>
  );

  const WAFArchitectureDiagrams = () => {
    const currentAWSWAF = `
      graph TD
        A[Internet] --> B[CloudFront]
        A --> C[Application Load Balancer]
        A --> D[API Gateway]
        
        B --> E[AWS WAF]
        C --> E
        D --> E
        
        E --> F[Web ACLs]
        F --> G[Managed Rules]
        F --> H[Custom Rules]
        
        G --> I[AWS Managed Rule Sets]
        G --> J[Marketplace Rule Sets]
        H --> K[IP Sets]
        H --> L[Regex Pattern Sets]
        
        E --> M[AWS WAF Actions]
        M --> N[Allow]
        M --> O[Block]
        M --> P[Count]
        M --> Q[CAPTCHA]
        
        R[AWS WAF Logs] --> S[Amazon CloudWatch Logs]
        R --> T[Amazon S3]
        
        U[AWS WAF API] --> E
        V[AWS WAF Console] --> E
        
        W[AWS Shield] --> E
        
        X[Protected Resources]
        E --> X
        X --> Y[Amazon S3]
        X --> Z[EC2 Instances]
        X --> AA[ECS Containers]
        X --> AB[Lambda Functions]
        
        AC[Security Teams] --> V
        AD[DevOps Teams] --> U

        classDef default fill:#f9f9f9,stroke:#333,stroke-width:1px;
        classDef highlight fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
        classDef resource fill:#fff8e1,stroke:#ffa000,stroke-width:1px;
        classDef action fill:#e8f5e9,stroke:#2e7d32,stroke-width:1px;
        classDef team fill:#f3e5f5,stroke:#6a1b9a,stroke-width:1px;
        
        class E,F highlight;
        class B,C,D,Y,Z,AA,AB resource;
        class N,O,P,Q action;
        class AC,AD team;
    `;

    const currentAzureWAF = `
      graph TD
        A[Internet] --> B[Azure Front Door]
        A --> C[Application Gateway]
        
        B --> D[Azure WAF]
        C --> D
        
        D --> E[WAF Policies]
        E --> F[Managed Rules]
        E --> G[Custom Rules]
        
        F --> H[Azure Managed Rule Sets]
        F --> I[OWASP Rule Sets]
        G --> J[Rate Limiting Rules]
        G --> K[Geo-filtering Rules]
        
        D --> L[WAF Actions]
        L --> M[Allow]
        L --> N[Block]
        L --> O[Log]
        L --> P[Redirect]
        
        Q[Azure WAF Logs] --> R[Azure Monitor]
        Q --> S[Azure Storage]
        
        T[Azure Resource Manager API] --> D
        U[Azure Portal] --> D
        
        V[Azure DDoS Protection] --> D
        
        W[Protected Resources]
        D --> W
        W --> X[Azure App Service]
        W --> Y[Azure Functions]
        W --> Z[AKS]
        W --> AA[VM Scale Sets]
        
        AB[Security Teams] --> U
        AC[DevOps Teams] --> T

        classDef default fill:#f9f9f9,stroke:#333,stroke-width:1px;
        classDef highlight fill:#e5f2ff,stroke:#0078d4,stroke-width:2px;
        classDef resource fill:#e6f7ff,stroke:#0078d4,stroke-width:1px;
        classDef action fill:#e6ffed,stroke:#28a745,stroke-width:1px;
        classDef team fill:#f5e6ff,stroke:#6f42c1,stroke-width:1px;
        
        class D,E highlight;
        class B,C,X,Y,Z,AA resource;
        class M,N,O,P action;
        class AB,AC team;
    `;

    const unifiedProposedSolution = `
      graph TD
        A[Internet] --> B[Global Load Balancer / Traffic Manager]
        
        B --> C[AWS Entry Points]
        B --> D[Azure Entry Points]
        
        C --> E[CloudFront]
        C --> F[ALB]
        C --> G[API Gateway]
        
        D --> H[Azure Front Door]
        D --> I[Application Gateway]
        
        E & F & G --> J[Centralized WAF Management Platform]
        H & I --> J
        
        J --> K[Unified Rule Repository]
        J --> L[Cross-Cloud Analytics]
        J --> M[Centralized Logging]
        J --> N[Automated Deployment]
        
        K --> O[Managed Rules]
        K --> P[Custom Rules]
        K --> Q[IP Reputation Lists]
        
        L --> R[Threat Intelligence Feed]
        L --> S[ML-based Anomaly Detection]
        
        M --> T[SIEM Integration]
        M --> U[Compliance Reporting]
        
        N --> V[CI/CD Pipeline]
        N --> W[Infrastructure as Code]
        
        J --> X[AWS WAF]
        J --> Y[Azure WAF]
        
        X --> Z[AWS Protected Resources]
        Y --> AA[Azure Protected Resources]
        
        AB[Security Teams] --> J
        AC[DevOps Teams] --> J
        AD[Compliance Teams] --> J

        classDef default fill:#f9f9f9,stroke:#333,stroke-width:1px;
        classDef highlight fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
        classDef aws fill:#fff8e1,stroke:#ff9900,stroke-width:1px;
        classDef azure fill:#e6f7ff,stroke:#0078d4,stroke-width:1px;
        classDef central fill:#f3e5f5,stroke:#6a1b9a,stroke-width:2px;
        classDef team fill:#e8f5e9,stroke:#2e7d32,stroke-width:1px;
        
        class J,K,L,M,N central;
        class C,E,F,G,X,Z aws;
        class D,H,I,Y,AA azure;
        class AB,AC,AD team;
    `;

    const KeyComponentBox = ({ title, items }) => (
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
        }}
        transition={{ duration: 0.3 }}
      >
        <h5 className="font-semibold text-lg mb-2 text-primary-600 dark:text-primary-400">{title}</h5>
        <ul className="space-y-1">
          {items.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-start"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-secondary-500 mr-2">•</span>
              <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    );

    return (
      <div className="space-y-16">
        <div>
          <h3 className="text-3xl font-bold mb-6 text-center">Current AWS WAF Architecture</h3>
          <MermaidDiagram chart={currentAWSWAF} />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <KeyComponentBox title="Entry Points" items={["CloudFront", "Application Load Balancer", "API Gateway"]} />
            <KeyComponentBox title="Core Components" items={["AWS WAF", "Web ACLs", "Managed & Custom Rules"]} />
            <KeyComponentBox title="Actions" items={["Allow", "Block", "Count", "CAPTCHA"]} />
            <KeyComponentBox title="Logging & Management" items={["CloudWatch Logs", "S3", "AWS WAF API", "AWS WAF Console"]} />
            <KeyComponentBox title="Integration" items={["AWS Shield for DDoS protection"]} />
            <KeyComponentBox title="Protected Resources" items={["S3", "EC2", "ECS", "Lambda"]} />
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-6 text-center">Current Azure WAF Architecture</h3>
          <MermaidDiagram chart={currentAzureWAF} />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <KeyComponentBox title="Entry Points" items={["Azure Front Door", "Application Gateway"]} />
            <KeyComponentBox title="Core Components" items={["Azure WAF", "WAF Policies", "Managed & Custom Rules"]} />
            <KeyComponentBox title="Actions" items={["Allow", "Block", "Log", "Redirect"]} />
            <KeyComponentBox title="Logging & Management" items={["Azure Monitor", "Azure Storage", "Azure Resource Manager API", "Azure Portal"]} />
            <KeyComponentBox title="Integration" items={["Azure DDoS Protection"]} />
            <KeyComponentBox title="Protected Resources" items={["App Service", "Functions", "AKS", "VM Scale Sets"]} />
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-6 text-center">Unified Proposed WAF Solution</h3>
          <MermaidDiagram chart={unifiedProposedSolution} />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <KeyComponentBox title="Traffic Management" items={["Global Load Balancer / Traffic Manager"]} />
            <KeyComponentBox title="Centralized Platform" items={["WAF Management Platform", "Unified Rule Repository"]} />
            <KeyComponentBox title="Advanced Features" items={["Cross-Cloud Analytics", "Centralized Logging", "Automated Deployment"]} />
            <KeyComponentBox title="Security Enhancements" items={["Threat Intelligence Feed", "ML-based Anomaly Detection"]} />
            <KeyComponentBox title="Compliance & Automation" items={["SIEM Integration", "Compliance Reporting", "CI/CD Pipeline", "Infrastructure as Code"]} />
            <KeyComponentBox title="Multi-Cloud Integration" items={["AWS WAF", "Azure WAF", "Protected Resources in both clouds"]} />
          </div>
        </div>
      </div>
    );
  };

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

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.focus();
    }
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="p-4 sm:p-8 min-h-screen flex flex-col transition-all duration-300 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
      >
        P66 Cross-Cloud WAF Analysis: Enhanced Executive Summary
      </motion.h1>
      
      <div 
        className="flex-grow flex flex-col justify-center"
        ref={slideRef}
        tabIndex={0}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <Slide key={currentSlide} title={slides[currentSlide].title}>
            <CurrentSlideComponent />
          </Slide>
        </AnimatePresence>
      </div>
      
      <div className="flex justify-between items-center mt-6 sm:mt-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevSlide}
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center transition-all duration-300 text-base sm:text-lg shadow-md hover:shadow-lg"
        >
          <ChevronLeft className="mr-2 sm:mr-3" /> Previous
        </motion.button>
        <span className="text-secondary-600 dark:text-secondary-400 text-lg sm:text-xl font-medium">
          {currentSlide + 1} / {slides.length}
        </span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center transition-all duration-300 text-base sm:text-lg shadow-md hover:shadow-lg"
        >
          Next <ChevronRight className="ml-2 sm:ml-3" />
        </motion.button>
      </div>
    </div>
  );
};

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
        .node rect { fill: #f4f4f4; stroke: #999; stroke-width: 2px; rx: 5px; ry: 5px; }
        .node text { font-size: 14px; font-weight: 500; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; }
        .edgePath path { stroke: #666; stroke-width: 2px; }
        .cluster rect { fill: #f0f0f0; stroke: #999; stroke-width: 2px; rx: 5px; ry: 5px; }
      `,
      fontSize: 14,
    });
    mermaid.contentLoaded();
  }, [chart]);

  return (
    <div className="mermaid-wrapper w-full overflow-x-auto my-6 sm:my-10">
      <div className="mermaid text-center" style={{ minWidth: '100%', width: '100%', height: 'auto' }}>{chart}</div>
    </div>
  );
};

export default ExecutiveSummarySlides;