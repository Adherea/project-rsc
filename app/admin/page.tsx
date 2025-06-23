export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">Main Account Dashboard</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Log Aktivitas</h2>
        <ul className="list-disc list-inside">
          <li>User: user1@rs.com - Login terakhir: 21 Mei 2025, 13:45</li>
          <li>User: user2@rs.com - Login terakhir: 21 Mei 2025, 10:22</li>
        </ul>
      </div>
    </div>
  );
}
