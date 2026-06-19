import React, { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Upload, FileText, Check, Clock, Edit3, Trash2, Download } from 'lucide-react';
import './DocumentChamber.css';

export default function DocumentChamber() {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Term_Sheet_v1.pdf', size: '2.4 MB', status: 'Draft', date: 'Oct 12, 2023' },
    { id: 2, name: 'Investment_Agreement.pdf', size: '5.1 MB', status: 'In Review', date: 'Oct 10, 2023' },
    { id: 3, name: 'NDA_Signed.pdf', size: '1.2 MB', status: 'Signed', date: 'Oct 05, 2023' }
  ]);
  
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [showSignaturePad, setShowSignaturePad] = useState(false);
  const sigPad = useRef({});

  const clearSignature = () => sigPad.current.clear();
  
  const saveSignature = () => {
    if (sigPad.current.isEmpty()) return;
    
    // In a real app, we'd save the signature data URL
    // const dataURL = sigPad.current.getTrimmedCanvas().toDataURL('image/png');
    
    const updatedDocs = documents.map(doc => 
      doc.id === selectedDoc.id ? { ...doc, status: 'Signed' } : doc
    );
    setDocuments(updatedDocs);
    setShowSignaturePad(false);
    setSelectedDoc(null);
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Draft': return <span className="status-badge draft"><Edit3 size={14}/> Draft</span>;
      case 'In Review': return <span className="status-badge review"><Clock size={14}/> In Review</span>;
      case 'Signed': return <span className="status-badge signed"><Check size={14}/> Signed</span>;
      default: return null;
    }
  };

  return (
    <div className="document-chamber-page container">
      <div className="page-header">
        <h1><FileText className="header-icon" /> Document Chamber</h1>
        <p>Securely upload, review, and e-sign your deal contracts.</p>
      </div>

      <div className="chamber-grid">
        <div className="chamber-left">
          <div className="upload-zone card glass-panel text-center">
            <Upload size={48} className="upload-icon mb-3" />
            <h3>Upload Document</h3>
            <p className="text-muted">Drag & drop PDFs, Word docs, or click to browse</p>
            <button className="btn-primary mt-3">Browse Files</button>
          </div>

          <div className="doc-list mt-4 card glass-panel">
            <h3 className="mb-3">Recent Documents</h3>
            <div className="list-group">
              {documents.map(doc => (
                <div 
                  key={doc.id} 
                  className={`list-item d-flex justify-between align-center ${selectedDoc?.id === doc.id ? 'active' : ''}`}
                  onClick={() => setSelectedDoc(doc)}
                >
                  <div className="doc-info d-flex align-center gap-2">
                    <div className="doc-icon"><FileText size={20} /></div>
                    <div>
                      <h5 className="mb-0">{doc.name}</h5>
                      <span className="text-muted text-sm">{doc.size} • {doc.date}</span>
                    </div>
                  </div>
                  <div className="doc-meta d-flex align-center gap-2">
                    {getStatusBadge(doc.status)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="chamber-right card glass-panel">
          {selectedDoc ? (
            <div className="doc-preview">
              <div className="preview-header d-flex justify-between align-center mb-4">
                <h3>{selectedDoc.name}</h3>
                <div className="preview-actions d-flex gap-2">
                  <button className="btn-icon"><Download size={18} /></button>
                  <button className="btn-icon danger"><Trash2 size={18} /></button>
                </div>
              </div>
              
              <div className="pdf-mockup mb-4">
                <div className="mock-page">
                  <div className="mock-title"></div>
                  <div className="mock-line"></div>
                  <div className="mock-line"></div>
                  <div className="mock-line short"></div>
                  <br/>
                  <div className="mock-line"></div>
                  <div className="mock-line"></div>
                  <div className="mock-line"></div>
                  <div className="mock-line short"></div>
                </div>
              </div>

              {selectedDoc.status !== 'Signed' && !showSignaturePad && (
                <div className="text-center">
                  <button className="btn-primary btn-lg w-100" onClick={() => setShowSignaturePad(true)}>
                    Sign Document
                  </button>
                </div>
              )}

              {showSignaturePad && (
                <div className="signature-area">
                  <h4 className="mb-2">E-Signature</h4>
                  <div className="sig-canvas-container">
                    <SignatureCanvas 
                      ref={sigPad}
                      penColor="black"
                      canvasProps={{className: 'sig-canvas'}}
                    />
                  </div>
                  <div className="sig-actions d-flex justify-between mt-3">
                    <button className="btn-outline" onClick={clearSignature}>Clear</button>
                    <div className="d-flex gap-2">
                      <button className="btn-outline" onClick={() => setShowSignaturePad(false)}>Cancel</button>
                      <button className="btn-primary" onClick={saveSignature}>Complete Signing</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="empty-state d-flex flex-column align-center justify-center h-100">
              <FileText size={64} className="text-muted mb-3" />
              <h3>Select a document</h3>
              <p className="text-muted">Click on a document from the list to preview and sign.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
