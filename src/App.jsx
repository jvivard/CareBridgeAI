import React, { useState } from 'react';
import { 
  Home, FileText, Activity, CreditCard, HelpCircle, ArrowRight, User, 
  Settings, MessageCircle, UploadCloud, CheckCircle2, AlertCircle, XCircle,
  File, FileImage, ShieldCheck, PieChart, Info, MapPin, Search, Bell, Menu
} from 'lucide-react';
import './App.css';

function App() {
  const [showNotifications, setShowNotifications] = useState(true);
  
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
      <main className="main-content" style={{ position: 'relative' }}>
        <header className="top-bar">
          <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => setShowNotifications(!showNotifications)}>
            <Bell size={20} className="text-secondary" />
            <span style={{ position: 'absolute', top: '-4px', right: '-4px', backgroundColor: 'var(--danger)', color: 'white', fontSize: '0.6rem', fontWeight: 'bold', width: '14px', height: '14px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
          </div>
          <div className="user-profile">
            <div className="avatar">P</div>
            <span className="font-medium text-sm">Patient</span>
          </div>
        </header>

        {showNotifications && (
          <div style={{ position: 'absolute', top: '70px', right: '30px', width: '380px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', zIndex: 100, border: '1px solid var(--border)', maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
            {/* Header */}
            <div className="flex justify-between items-center" style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border)' }}>
              <h3 className="font-semibold text-sm">Notifications</h3>
              <a href="#" className="text-primary text-xs font-medium" style={{ textDecoration: 'none' }}>Mark all as read</a>
            </div>
            
            {/* Notification list */}
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div className="notification-card danger" style={{ margin: 0, border: 'none', backgroundColor: '#fef2f2', padding: '1rem', borderRadius: '8px' }}>
                <div className="flex gap-3">
                  <XCircle className="text-danger flex-shrink-0" size={20} />
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-danger font-semibold text-xs">Hospital not covered under your policy</h4>
                      <span className="text-xs text-secondary" style={{ fontSize: '0.65rem' }}>2 min ago</span>
                    </div>
                    <p className="text-xs" style={{ color: '#475569', marginBottom: '0.5rem', lineHeight: 1.4 }}>Navchethana Hospital, Bannerghatta Road is not in your insurance network. Treatments here may not be eligible for cashless benefits.</p>
                    <button className="btn-secondary text-xs" style={{ padding: '4px 12px', color: '#b91c1c', borderColor: '#fca5a5', backgroundColor: '#fef2f2' }}>View Alternatives</button>
                  </div>
                </div>
              </div>
              
              <div className="notification-card info" style={{ margin: 0, border: 'none', backgroundColor: '#eff6ff', padding: '1rem', borderRadius: '8px' }}>
                <div className="flex gap-3">
                  <Info className="text-primary flex-shrink-0" size={20} />
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-semibold text-xs">Better alternative available</h4>
                      <span className="text-xs text-secondary" style={{ fontSize: '0.65rem' }}>5 min ago</span>
                    </div>
                    <p className="text-xs" style={{ color: '#475569', marginBottom: '0.5rem', lineHeight: 1.4 }}>Manipal Hospital (5.2 km) is a network hospital and eligible for cashless treatment.</p>
                    <a href="#" className="text-primary text-xs font-medium" style={{ textDecoration: 'none' }}>View Hospital Details</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ padding: '0 1rem 1rem' }}>
              <div style={{ height: '120px', backgroundColor: '#e2e8f0', backgroundImage: 'url(https://images.unsplash.com/photo-1587351021759-3e566d6af7bf?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px', marginBottom: '1rem', position: 'relative', overflow: 'hidden' }}>
                 <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}></div>
                 <div style={{ position: 'absolute', bottom: '8px', left: '12px', color: 'white', fontWeight: 600, fontSize: '0.8rem' }}>Navchethana Hospital</div>
              </div>
              
              <div style={{ backgroundColor: '#fef2f2', padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem' }}>
                 <div className="flex items-center gap-2 mb-1">
                   <XCircle className="text-danger" size={14} />
                   <h4 className="text-danger font-semibold text-xs">Not Covered Under Your Policy</h4>
                 </div>
                 <p style={{ fontSize: '0.7rem', color: '#7f1d1d', lineHeight: 1.4, paddingLeft: '22px' }}>Navchethana Hospital, Bannerghatta Road is not in your insurance network. Cashless treatment may not be available.</p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', marginBottom: '1rem' }}>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="text-primary" size={14} />
                  <h4 className="font-semibold text-xs">Why is this hospital not covered?</h4>
                </div>
                <ul style={{ paddingLeft: '1.75rem', fontSize: '0.7rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.25rem', margin: 0 }}>
                  <li>This hospital is not listed in your policy's network provider list.</li>
                  <li>Cashless treatment is not available.</li>
                  <li>You may need to pay the full amount upfront and claim reimbursement later (as per policy terms).</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#f0f9ff', padding: '0.75rem', borderRadius: '8px', border: '1px solid #bae6fd' }}>
                <div className="flex items-start gap-2 mb-3">
                  <AlertCircle className="text-primary mt-1" size={14} />
                  <div>
                    <h4 className="text-primary font-semibold text-xs">Recommended Alternatives</h4>
                    <p style={{ fontSize: '0.65rem' }} className="text-secondary">Here are nearby network hospitals:</p>
                  </div>
                </div>
                
                <div className="flex-col gap-2">
                  <div className="hospital-pill" style={{ padding: '0.5rem', marginBottom: '0.4rem' }}>
                    <span className="font-medium text-xs">Manipal Hospital</span>
                    <div className="flex items-center gap-2">
                      <span className="text-secondary flex items-center gap-1" style={{ fontSize: '0.65rem' }}><MapPin size={10}/> 5.2 km</span>
                      <span className="text-success bg-success-light" style={{ padding: '2px 6px', borderRadius: '12px', fontSize: '0.65rem' }}>Network Hospital</span>
                      <ArrowRight size={12} className="text-secondary" />
                    </div>
                  </div>
                  <div className="hospital-pill" style={{ padding: '0.5rem', marginBottom: '0.4rem' }}>
                    <span className="font-medium text-xs">Apollo Hospital</span>
                    <div className="flex items-center gap-2">
                      <span className="text-secondary flex items-center gap-1" style={{ fontSize: '0.65rem' }}><MapPin size={10}/> 6.8 km</span>
                      <span className="text-success bg-success-light" style={{ padding: '2px 6px', borderRadius: '12px', fontSize: '0.65rem' }}>Network Hospital</span>
                      <ArrowRight size={12} className="text-secondary" />
                    </div>
                  </div>
                  <div className="hospital-pill" style={{ padding: '0.5rem', marginBottom: 0 }}>
                    <span className="font-medium text-xs">Narayana Health City</span>
                    <div className="flex items-center gap-2">
                      <span className="text-secondary flex items-center gap-1" style={{ fontSize: '0.65rem' }}><MapPin size={10}/> 12.4 km</span>
                      <span className="text-success bg-success-light" style={{ padding: '2px 6px', borderRadius: '12px', fontSize: '0.65rem' }}>Network Hospital</span>
                      <ArrowRight size={12} className="text-secondary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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
