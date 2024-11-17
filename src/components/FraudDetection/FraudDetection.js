import React, { useState } from "react";

const FraudDetection = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [transactionDetails, setTransactionDetails] = useState('');
    const [result, setResult] = useState(null);

    const handleCheckFraud = () => {
        // Simulate fraud detection logic
        if (transactionDetails.toLowerCase().includes('suspicious')) {
            setResult('Potential Fraud Detected');
        } else {
            setResult('No Fraud Detected');
        }
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
            <header style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h1>Ascend by GS</h1>
                <h2>Banking Fraud Detection</h2>
            </header>

            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
                <h3>Check for Fraudulent Activity</h3>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="accountNumber" style={{ display: 'block', marginBottom: '5px' }}>Account Number</label>
                    <input
                        id="accountNumber"
                        type="text"
                        placeholder="Enter Account Number"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '5px',
                            border: '1px solid #ccc'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="transactionDetails" style={{ display: 'block', marginBottom: '5px' }}>Transaction Details</label>
                    <textarea
                        id="transactionDetails"
                        placeholder="Enter transaction details..."
                        value={transactionDetails}
                        onChange={(e) => setTransactionDetails(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            height: '80px'
                        }}
                    />
                </div>

                <button
                    onClick={handleCheckFraud}
                    style={{
                        backgroundColor: '#004e8c',
                        color: 'white',
                        padding: '10px 15px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Check Fraud
                </button>

                {result && (
                    <div
                        style={{
                            marginTop: '20px',
                            padding: '10px',
                            backgroundColor: result === 'No Fraud Detected' ? '#d4edda' : '#f8d7da',
                            color: result === 'No Fraud Detected' ? '#155724' : '#721c24',
                            border: `1px solid ${result === 'No Fraud Detected' ? '#c3e6cb' : '#f5c6cb'}`,
                            borderRadius: '5px'
                        }}
                    >
                        <strong>{result}</strong>
                    </div>
                )}
            </div>
        </div>
    );
}


export default FraudDetection;
