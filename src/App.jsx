import React from 'react';
import { 
  Home, FileText, Activity, CreditCard, HelpCircle, ArrowRight, User, 
  Settings, MessageCircle, UploadCloud, CheckCircle2, AlertCircle, XCircle,
  File, FileImage, ShieldCheck, PieChart, Info, MapPin, Search, Bell
} from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <div className="avatar" style={{ backgroundColor: '#2563eb' }}>+</div>
          CareBridge AI
        </div>
        
        <nav className="flex-col gap-2" style={{ flex: 1, marginTop: '1rem' }}>
          <a href="#" className="nav-item active"><Home size={20} /> Dashboard</a>
          <a href="#" className="nav-item"><FileText size={20} /> Upload Documents</a>
          <a href="#" className="nav-item"><Activity size={20} /> Coverage Analysis</a>
          <a href="#" className="nav-item"><CreditCard size={20} /> Cost Estimate</a>
          <a href="#" className="nav-item"><HelpCircle size={20} /> Explanation</a>
          <a href="#" className="nav-item"><ArrowRight size={20} /> Next Steps</a>
          <a href="#" className="nav-item"><User size={20} /> Profile</a>
        </nav>

        <div className="help-card">
          <h4>Need Help?</h4>
          <p>Get support or chat with our assistant.</p>
          <button className="btn-secondary" style={{ width: '100%', fontSize: '0.8rem' }}>
            <MessageCircle size={16} className="text-primary" />
            Chat with CareBridge
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="top-bar">
          <Bell size={20} className="text-secondary" style={{ cursor: 'pointer' }} />
          <div className="user-profile">
            <div className="avatar">P</div>
            <span className="font-medium text-sm">Patient</span>
          </div>
        </header>

        <div className="content-grid">
          {/* Left / Center Column */}
          <div className="center-column">
            <div>
              <h1>Hello! 👋</h1>
              <p>Upload your insurance and hospital documents to get clear, explainable financial insights.</p>
            </div>

            {/* Upload Section */}
            <div className="card flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FileText className="text-primary" size={20} />
                  <h3 className="font-semibold text-lg">Upload Documents</h3>
                </div>
                <div className="flex items-center gap-1 text-success text-sm bg-success-light" style={{ padding: '4px 8px', borderRadius: '12px' }}>
                  <ShieldCheck size={16} />
                  Your data is secure
                </div>
              </div>
              <p className="text-sm">Add your insurance policy, hospital bills, discharge summary and other relevant documents.</p>
              
              <div className="upload-area">
                <UploadCloud size={40} className="text-primary" style={{ margin: '0 auto 1rem' }} />
                <h4 className="text-primary">Drag and drop files here</h4>
                <p>or click to upload</p>
                <p className="text-xs mt-2" style={{ marginTop: '0.5rem' }}>Supports PDF, JPG, PNG (Max 10MB each)</p>
              </div>

              <div className="flex gap-3" style={{ flexWrap: 'wrap' }}>
                <div className="file-pill pdf">
                  <File size={16} className="icon" />
                  HealthSure Policy.pdf
                  <CheckCircle2 size={16} className="text-success" style={{ marginLeft: '4px' }} />
                </div>
                <div className="file-pill pdf">
                  <File size={16} className="icon" style={{ color: '#3b82f6' }} />
                  Hospital Bill.pdf
                  <CheckCircle2 size={16} className="text-success" style={{ marginLeft: '4px' }} />
                </div>
                <div className="file-pill pdf">
                  <File size={16} className="icon" style={{ color: '#10b981' }} />
                  Discharge Summary.pdf
                  <CheckCircle2 size={16} className="text-success" style={{ marginLeft: '4px' }} />
                </div>
                <div className="file-pill img">
                  <FileImage size={16} className="icon" />
                  Lab Reports.jpg
                  <CheckCircle2 size={16} className="text-success" style={{ marginLeft: '4px' }} />
                </div>
              </div>
            </div>

            {/* Coverage Analysis Section */}
            <div className="card flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Activity className="text-primary" size={20} />
                  <h3 className="font-semibold text-lg">Coverage Analysis</h3>
                </div>
                <button className="btn-primary">
                  <Activity size={16} />
                  Analyze Documents
                </button>
              </div>
              <p className="text-sm">AI-powered analysis of your insurance policy and hospital documents.</p>
              
              <div className="analysis-stepper">
                <div className="step completed">
                  <div className="step-circle"><CheckCircle2 size={14} /></div>
                  <div className="step-label">Documents Uploaded</div>
                </div>
                <div className="step completed">
                  <div className="step-circle"><CheckCircle2 size={14} /></div>
                  <div className="step-label">Extracting Information</div>
                </div>
                <div className="step completed">
                  <div className="step-circle"><CheckCircle2 size={14} /></div>
                  <div className="step-label">Policy Analysis</div>
                </div>
                <div className="step completed">
                  <div className="step-circle"><CheckCircle2 size={14} /></div>
                  <div className="step-label">Calculating Coverage</div>
                </div>
                <div className="step active">
                  <div className="step-circle">5</div>
                  <div className="step-label">Generating Results</div>
                </div>
              </div>

              <div className="tabs">
                <div className="tab active">Results</div>
                <div className="tab">Bill Breakdown</div>
                <div className="tab">Policy Clauses</div>
                <div className="tab">Explanation</div>
                <div className="tab">Next Steps</div>
              </div>

              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Expense Category</th>
                      <th>Billed Amount</th>
                      <th>Covered Amount</th>
                      <th>Status</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-medium">Room Charges (Deluxe)</td>
                      <td>₹48,000</td>
                      <td>₹24,000</td>
                      <td><span className="status-badge partial">Partial</span></td>
                      <td className="text-xs">Capped as per policy (₹5,000/day)</td>
                    </tr>
                    <tr>
                      <td className="font-medium">Consultation Fees</td>
                      <td>₹18,000</td>
                      <td>₹18,000</td>
                      <td><span className="status-badge covered">Covered</span></td>
                      <td className="text-xs">Covered under OPD</td>
                    </tr>
                    <tr>
                      <td className="font-medium">Diagnostics</td>
                      <td>₹22,000</td>
                      <td>₹22,000</td>
                      <td><span className="status-badge covered">Covered</span></td>
                      <td className="text-xs">Covered</td>
                    </tr>
                    <tr>
                      <td className="font-medium">Medicines</td>
                      <td>₹35,000</td>
                      <td>₹10,000</td>
                      <td><span className="status-badge partial">Partial</span></td>
                      <td className="text-xs">Certain consumables not reimbursable</td>
                    </tr>
                    <tr>
                      <td className="font-medium">Procedures (Surgery)</td>
                      <td>₹60,000</td>
                      <td>₹60,000</td>
                      <td><span className="status-badge covered">Covered</span></td>
                      <td className="text-xs">Covered as per policy</td>
                    </tr>
                    <tr style={{ borderTop: '2px solid var(--border)' }}>
                      <td className="font-bold">Total</td>
                      <td className="font-bold">₹1,83,000</td>
                      <td className="font-bold">₹1,20,000</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            
            {/* Coverage Summary */}
            <div className="card flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <PieChart className="text-primary" size={20} />
                <h3 className="font-semibold text-lg">Coverage Summary</h3>
              </div>
              
              <div className="summary-card success">
                <div className="summary-icon"><CheckCircle2 size={24} /></div>
                <div style={{ flex: 1 }}>
                  <div className="summary-value">₹1,20,000</div>
                  <div className="summary-label">Covered Amount</div>
                </div>
                <div className="text-right">
                  <div className="font-bold">68%</div>
                  <div className="text-xs text-secondary">of total bill</div>
                </div>
              </div>

              <div className="summary-card warning">
                <div className="summary-icon"><AlertCircle size={24} /></div>
                <div style={{ flex: 1 }}>
                  <div className="summary-value">₹35,000</div>
                  <div className="summary-label">Restricted / Capped</div>
                </div>
                <div className="text-right">
                  <div className="font-bold">20%</div>
                  <div className="text-xs text-secondary">of total bill</div>
                </div>
              </div>

              <div className="summary-card danger" style={{ marginBottom: 0 }}>
                <div className="summary-icon"><XCircle size={24} /></div>
                <div style={{ flex: 1 }}>
                  <div className="summary-value">₹25,000</div>
                  <div className="summary-label">Likely Out-of-Pocket</div>
                </div>
                <div className="text-right">
                  <div className="font-bold">12%</div>
                  <div className="text-xs text-secondary">of total bill</div>
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div className="card flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Info className="text-primary" size={20} />
                <h3 className="font-semibold">Key Insights</h3>
              </div>
              <div className="insight-item">
                <div className="insight-icon"><CheckCircle2 size={12} /></div>
                <p className="text-sm">Room charges exceed the policy limit of ₹5,000 per day (Clause 4.2.1).</p>
              </div>
              <div className="insight-item">
                <div className="insight-icon"><CheckCircle2 size={12} /></div>
                <p className="text-sm">Surgery and related diagnostics are covered.</p>
              </div>
              <div className="insight-item">
                <div className="insight-icon bg-warning-light text-warning"><AlertCircle size={12} /></div>
                <p className="text-sm">Certain consumables and non-listed medicines are not reimbursable.</p>
              </div>
              <div className="insight-item" style={{ marginBottom: 0 }}>
                <div className="insight-icon"><CheckCircle2 size={12} /></div>
                <p className="text-sm">No proportionate deduction applicable.</p>
              </div>
            </div>

            {/* Policy Reference */}
            <div className="card flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="text-primary" size={20} />
                <h3 className="font-semibold">Policy Clause Reference</h3>
              </div>
              <div className="policy-reference">
                "Room rent is limited to ₹5,000 per day for Deluxe category. Any charges exceeding this will be borne by the insured."<br/><br/>
                <span className="font-medium">Clause 4.2.1 - Room Charges</span>
              </div>
              <a href="#" className="text-primary text-sm font-medium mt-1">View Full Clause →</a>
            </div>

            {/* Next Steps */}
            <div className="card flex-col gap-3">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="text-primary" size={20} />
                <h3 className="font-semibold">Next Steps</h3>
              </div>
              <div className="next-step-list">
                <div className="next-step-item">
                  <div className="step-number">1</div>
                  <p className="text-sm">Discuss room charge difference with hospital.</p>
                </div>
                <div className="next-step-item">
                  <div className="step-number">2</div>
                  <p className="text-sm">Confirm cashless eligibility for final bill.</p>
                </div>
                <div className="next-step-item">
                  <div className="step-number">3</div>
                  <p className="text-sm">Keep all original bills and prescriptions.</p>
                </div>
                <div className="next-step-item">
                  <div className="step-number">4</div>
                  <p className="text-sm">Follow up with insurer for claim filing.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
