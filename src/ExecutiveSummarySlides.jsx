import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowRight, Check, X, AlertTriangle, ArrowDown } from 'lucide-react';

const Slide = ({ title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

const TalkingPoint = ({ children }) => (
  <div className="flex items-start mt-2">
    <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
    <p>{children}</p>
  </div>
);

const FlowChartBox = ({ children, color = "bg-blue-100" }) => (
  <div className={`${color} border border-gray-300 rounded-lg p-2 text-center`}>
    {children}
  </div>
);

const FlowChartArrow = () => (
  <div className="flex justify-center my-2">
    <ArrowDown className="text-gray-500" />
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

const ExecutiveSummarySlides = () => (
  <div className="bg-gray-100 p-8">
    <h1 className="text-4xl font-bold mb-8">P66 Cross-Cloud WAF Analysis: Enhanced Executive Summary</h1>
    
    <Slide title="Project Overview">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2">Scope</h3>
          <ul className="list-disc pl-6">
            <li>Comprehensive analysis of WAF implementations</li>
            <li>AWS and Azure cloud environments</li>
            <li>4,834 AWS WAF items across 172 accounts</li>
            <li>41 Azure WAF policies across multiple subscriptions</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Objectives</h3>
          <ul className="list-disc pl-6">
            <li>Assess current WAF security posture</li>
            <li>Identify gaps and inconsistencies</li>
            <li>Provide actionable recommendations</li>
            <li>Develop cross-cloud WAF strategy</li>
          </ul>
        </div>
      </div>
    </Slide>
    
    <Slide title="Current State Analysis">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2">AWS WAF Distribution</h3>
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
          <h3 className="font-bold mb-2">Azure WAF Policies</h3>
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
      <TalkingPoint>AWS environment shows a distributed approach with numerous WAF items across multiple accounts</TalkingPoint>
      <TalkingPoint>Azure implementation uses a more centralized policy-based approach</TalkingPoint>
    </Slide>
    
    <Slide title="Key Findings">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2">AWS WAF Version Distribution</h3>
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
          <h3 className="font-bold mb-2">Critical Observations</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Check className="text-green-500 mr-2" />
              Strong adoption of AWS WAF v2 (99.15%)
            </li>
            <li className="flex items-center">
              <AlertTriangle className="text-yellow-500 mr-2" />
              Mix of Classic and Standard SKUs in Azure
            </li>
            <li className="flex items-center">
              <X className="text-red-500 mr-2" />
              Inconsistent default actions in AWS
            </li>
            <li className="flex items-center">
              <AlertTriangle className="text-yellow-500 mr-2" />
              Complex custom rules in Azure requiring management
            </li>
          </ul>
        </div>
      </div>
      <TalkingPoint>High adoption of current WAF versions, but some legacy components remain</TalkingPoint>
      <TalkingPoint>Inconsistencies in configuration and rule management across cloud providers</TalkingPoint>
    </Slide>
    
    <Slide title="Security Posture Assessment">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2">Strengths</h3>
          <ul className="list-disc pl-6">
            <li>Extensive use of Managed Rule Sets in both clouds</li>
            <li>Strong OWASP Top 10 coverage</li>
            <li>Comprehensive custom rules in Azure for specific apps</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Areas for Improvement</h3>
          <ul className="list-disc pl-6">
            <li>Standardize WAF versions and SKUs</li>
            <li>Align security practices across cloud providers</li>
            <li>Enhance cross-cloud logging and monitoring</li>
            <li>Implement consistent IP reputation management</li>
          </ul>
        </div>
      </div>
      <TalkingPoint>Current implementation provides strong baseline protection</TalkingPoint>
      <TalkingPoint>Opportunities exist for enhanced cross-cloud consistency and advanced features utilization</TalkingPoint>
    </Slide>
    
    <Slide title="Recommendations">
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">1</div>
          <p><strong>Standardize WAF Configurations:</strong> Align versions, SKUs, and baseline rules across AWS and Azure</p>
        </div>
        <div className="flex items-start">
          <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">2</div>
          <p><strong>Implement Cross-Cloud Management:</strong> Centralize WAF control and monitoring for both environments</p>
        </div>
        <div className="flex items-start">
          <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">3</div>
          <p><strong>Enhance Logging and Monitoring:</strong> Implement comprehensive, cross-cloud visibility</p>
        </div>
        <div className="flex items-start">
          <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">4</div>
          <p><strong>Standardize Bot Protection:</strong> Implement consistent bot management across cloud providers</p>
        </div>
        <div className="flex items-start">
          <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">5</div>
          <p><strong>Regular Security Posture Assessments:</strong> Conduct cross-cloud WAF audits and penetration testing</p>
        </div>
      </div>
    </Slide>
    
    <Slide title="Implementation Roadmap">
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
      <TalkingPoint>Phased approach ensures methodical improvement of WAF posture</TalkingPoint>
      <TalkingPoint>Continuous optimization beyond initial 18-month timeline</TalkingPoint>
    </Slide>
    
    <Slide title="Current WAF Management Flow">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2">AWS WAF Management</h3>
          <FlowChartBox>AWS Console / CLI / API</FlowChartBox>
          <FlowChartArrow />
          <FlowChartBox>Web ACLs</FlowChartBox>
          <FlowChartArrow />
          <FlowChartBox>Rule Groups</FlowChartBox>
          <FlowChartArrow />
          <FlowChartBox>AWS Resources (CloudFront, ALB, API Gateway)</FlowChartBox>
        </div>
        <div>
          <h3 className="font-bold mb-2">Azure WAF Management</h3>
          <FlowChartBox>Azure Portal / CLI / API</FlowChartBox>
          <FlowChartArrow />
          <FlowChartBox>WAF Policies</FlowChartBox>
          <FlowChartArrow />
          <FlowChartBox>Custom Rules</FlowChartBox>
          <FlowChartArrow />
          <FlowChartBox>Azure Resources (Front Door, App Gateway)</FlowChartBox>
        </div>
      </div>
      <TalkingPoint>Current management requires separate processes for each cloud provider</TalkingPoint>
      <TalkingPoint>Limited visibility across environments increases complexity and potential for inconsistencies</TalkingPoint>
    </Slide>

    <Slide title="Centralized WAF Management Solution">
      <div className="space-y-4">
        <FlowChartBox color="bg-green-100">Centralized WAF Management Platform</FlowChartBox>
        <FlowChartArrow />
        <div className="grid grid-cols-2 gap-4">
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
        <FlowChartBox color="bg-yellow-100">Unified Logging and Monitoring</FlowChartBox>
      </div>
      <TalkingPoint>Centralized platform provides single pane of glass for WAF management across cloud providers</TalkingPoint>
      <TalkingPoint>Unified logging and monitoring enables comprehensive visibility and analytics</TalkingPoint>
    </Slide>

    <Slide title="Technical Implementation: Centralized WAF Management">
      <div className="space-y-4">
        <h3 className="font-bold">Key Components:</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Multi-Cloud Orchestration Tool:</strong> Terraform or Ansible for infrastructure-as-code management</li>
          <li><strong>Central Management API:</strong> Custom-developed RESTful API to abstract cloud-specific operations</li>
          <li><strong>Configuration Repository:</strong> Git-based version control for WAF configurations</li>
          <li><strong>CI/CD Pipeline:</strong> Jenkins or GitLab CI for automated testing and deployment of WAF changes</li>
          <li><strong>Unified Logging:</strong> ELK Stack (Elasticsearch, Logstash, Kibana) or Splunk for log aggregation and analysis</li>
        </ol>
        <h3 className="font-bold mt-4">Implementation Steps:</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Develop central management API to interface with AWS and Azure WAF APIs</li>
          <li>Create Terraform modules for standardized WAF deployments across clouds</li>
          <li>Set up Git repository for WAF configurations with branch protection and review processes</li>
          <li>Implement CI/CD pipeline for automated testing and deployment of WAF changes</li>
          <li>Configure log shipping from both cloud providers to central logging platform</li>
          <li>Develop custom dashboards and alerts in unified monitoring solution</li>
        </ol>
      </div>
    </Slide>

    <Slide title="Addressing Key Issues: Technical Approach">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2">1. Version Standardization</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use AWS WAF API to identify and list all v1 Web ACLs</li>
            <li>Develop migration script using AWS WAF v2 API to recreate rules</li>
            <li>Implement in phases, starting with non-production environments</li>
            <li>Use Azure Resource Manager API to standardize WAF policy SKUs</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">2. Rule Consistency</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create mapping of AWS Managed Rules to Azure Managed Rule Sets</li>
            <li>Develop templates for common custom rules applicable to both clouds</li>
            <li>Implement rule sync feature in central management API</li>
            <li>Use tagging for easy identification of synchronized rules</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <h3 className="font-bold mb-2">3. Logging and Monitoring</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Configure AWS Kinesis Firehose for real-time log streaming</li>
            <li>Set up Azure Event Hubs for WAF diagnostic logs</li>
            <li>Develop Logstash pipelines for log normalization</li>
            <li>Create Kibana dashboards for cross-cloud WAF metrics</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">4. Automated Compliance Checks</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Develop custom AWS Config rules for WAF compliance</li>
            <li>Implement Azure Policy definitions for WAF standards</li>
            <li>Create centralized compliance dashboard using PowerBI or Tableau</li>
            <li>Set up automated notifications for compliance violations</li>
          </ul>
        </div>
      </div>
    </Slide>

    <Slide title="Enhanced WAF Operational Flow">
      <div className="space-y-4">
        <FlowChartBox color="bg-purple-100">Security Team: Rule Creation/Update Request</FlowChartBox>
        <FlowChartArrow />
        <FlowChartBox color="bg-blue-100">Central Management API: Validate and Process Request</FlowChartBox>
        <FlowChartArrow />
        <FlowChartBox color="bg-green-100">Git Repository: Update WAF Configuration</FlowChartBox>
        <FlowChartArrow />
        <FlowChartBox color="bg-yellow-100">CI/CD Pipeline: Test and Stage Changes</FlowChartBox>
        <FlowChartArrow />
        <div className="grid grid-cols-2 gap-4">
          <FlowChartBox>Deploy to AWS WAF</FlowChartBox>
          <FlowChartBox>Deploy to Azure WAF</FlowChartBox>
        </div>
        <FlowChartArrow />
        <FlowChartBox color="bg-red-100">Unified Monitoring: Validate and Alert</FlowChartBox>
      </div>
      <TalkingPoint>Streamlined process ensures consistency and proper testing before deployment</TalkingPoint>
      <TalkingPoint>Automated workflow reduces manual errors and improves response time to threats</TalkingPoint>
    </Slide>

    <Slide title="Key Performance Indicators (KPIs) for WAF Optimization">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2">Security KPIs</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Number of blocked attacks per day</li>
            <li>False positive rate</li>
            <li>Average time to mitigate new threats</li>
            <li>Percentage of traffic scanned by WAF</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Operational KPIs</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>WAF rule deployment time</li>
            <li>Number of manual vs. automated rule updates</li>
            <li>Time spent on WAF management per week</li>
            <li>WAF configuration compliance rate</li>
          </ul>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={[
            { name: 'Jan', Blocked: 1000, FalsePositive: 50 },
            { name: 'Feb', Blocked: 1200, FalsePositive: 40 },
            { name: 'Mar', Blocked: 1500, FalsePositive: 30 },
            { name: 'Apr', Blocked: 1800, FalsePositive: 25 },
          ]}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="Blocked" stroke="#8884d8" name="Blocked Attacks" />
          <Line yAxisId="right" type="monotone" dataKey="FalsePositive" stroke="#82ca9d" name="False Positives" />
        </LineChart>
      </ResponsiveContainer>
      <TalkingPoint>Regular monitoring of KPIs ensures continuous improvement of WAF effectiveness</TalkingPoint>
    </Slide>

    <Slide title="Expected Outcomes">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2">Security Benefits</h3>
          <ul className="list-disc pl-6">
            <li>Enhanced protection against web application threats</li>
            <li>Improved visibility and control across cloud environments</li>
            <li>Faster response to emerging threats</li>
            <li>Reduced risk of data breaches and compliance violations</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Operational Improvements</h3>
          <ul className="list-disc pl-6">
            <li>Streamlined WAF management processes</li>
            <li>Reduced complexity in multi-cloud operations</li>
            <li>Improved collaboration between security and cloud teams</li>
            <li>Enhanced ability to meet compliance requirements</li>
          </ul>
        </div>
      </div>
      <TalkingPoint>Significant enhancement in overall web application security posture</TalkingPoint>
      <TalkingPoint>Improved operational efficiency and reduced management overhead</TalkingPoint>
    </Slide>

    <Slide title="Next Steps">
      <ol className="list-decimal pl-6 space-y-2">
        <li>Secure executive sponsorship for the cross-cloud WAF initiative</li>
        <li>Allocate resources for the implementation team</li>
        <li>Begin detailed planning for Phase 1: Assessment and Standardization</li>
        <li>Schedule kick-off meeting with key stakeholders from security and cloud teams</li>
        <li>Establish regular progress review cadence</li>
      </ol>
      <TalkingPoint>Success depends on cross-functional collaboration and executive support</TalkingPoint>
      <TalkingPoint>Regular reviews will ensure alignment with evolving security needs and cloud capabilities</TalkingPoint>
    </Slide>
  </div>
);

export default ExecutiveSummarySlides;