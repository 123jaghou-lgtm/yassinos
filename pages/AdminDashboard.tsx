import React from 'react';
import { JOBS, MOCK_USER } from '../constants';

const AdminDashboard: React.FC = () => {
    const pendingJobs = JOBS.filter(j => j.status === 'pending');

    const StatCard = ({ title, value, icon }: { title: string, value: string, icon: string }) => (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center">
            <div className="bg-primary-light text-primary-dark p-4 rounded-full mr-4">
                <i className={`fas ${icon} text-2xl`}></i>
            </div>
            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
            </div>
        </div>
    );

    return (
        <div className="space-y-8 text-left">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Tableau de bord Administrateur</h1>
            
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Visiteurs (30j)" value="10,452" icon="fa-users" />
                <StatCard title="Annonces Actives" value="128" icon="fa-bullhorn" />
                <StatCard title="Utilisateurs Inscrits" value="1,204" icon="fa-user-plus" />
                <StatCard title="Annonces en Attente" value={pendingJobs.length.toString()} icon="fa-clock" />
            </div>

            {/* Pending Posts Section */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Publications en attente de modération</h2>
                {pendingJobs.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <th className="p-3">Titre</th>
                                    <th className="p-3">Entreprise</th>
                                    <th className="p-3">Date</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pendingJobs.map(job => (
                                    <tr key={job.id} className="border-b dark:border-gray-700">
                                        <td className="p-3 font-semibold">{job.title}</td>
                                        <td className="p-3">{job.company}</td>
                                        <td className="p-3">{job.postedDate}</td>
                                        <td className="p-3 space-x-2">
                                            <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm">Approuver</button>
                                            <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">Rejeter</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-gray-500">Aucune publication en attente de modération.</p>
                )}
            </div>
            
             {/* User Management Section (Simulation) */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Gestion des utilisateurs</h2>
                 <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <th className="p-3">Nom</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b dark:border-gray-700">
                                    <td className="p-3 font-semibold">{MOCK_USER.name}</td>
                                    <td className="p-3">{MOCK_USER.email}</td>
                                    <td className="p-3 space-x-2">
                                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm">Suspendre</button>
                                        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">Supprimer</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    );
};

export default AdminDashboard;