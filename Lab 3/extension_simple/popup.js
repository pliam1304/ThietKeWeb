document.getElementById('inspectBtn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `Tiêu đề: ${tab.title}<br>Độ dài URL: ${tab.url.length} ký tự`;
});
