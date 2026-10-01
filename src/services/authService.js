// NETRA Authentication Service
// Clean architecture ready for future integration with Python/FastAPI backend (e.g., JWT OAuth2)

const AUTH_STORAGE_KEY = 'netra_auth_session';

export const authService = {
  /**
   * Mock login simulating server authentication for hackathon demo
   * Easily replaceable with: await fetch('/api/auth/login', { method: 'POST', body: ... })
   */
  async login(memberId, password, role = 'Cyber Security Analyst') {
    // Simulate network latency (400ms)
    await new Promise((resolve) => setTimeout(resolve, 400));

    if (!memberId || !memberId.trim()) {
      throw new Error("Member ID or Email is required.");
    }

    if (!password || password.length < 4) {
      throw new Error("Password must be at least 4 characters.");
    }

    if (!role) {
      throw new Error("Please select an authorized role.");
    }

    // Demo user payload
    const user = {
      id: "NETRA-OFFICER-789",
      memberId: memberId.trim(),
      name: memberId.includes('@') ? memberId.split('@')[0].replace('.', ' ').toUpperCase() : "A. Kumar",
      badgeNumber: "IND-CYBER-8841",
      role: role,
      department: "Cyber Crime Investigation Division",
      email: memberId.includes('@') ? memberId : "a.kumar@cybercell.gov.in",
      phone: "+91 94310 99881",
      station: "Patna Cyber Police Station",
      securityClearance: "LEVEL-4 RESTRICTED",
      lastLogin: new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      token: "mock-jwt-token-" + Math.random().toString(36).substring(2)
    };

    // Store in storage
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    return user;
  },

  /**
   * Log out current user
   */
  logout() {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  },

  /**
   * Get currently authenticated user object or null
   */
  getCurrentUser() {
    try {
      const data = localStorage.getItem(AUTH_STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated() {
    return !!this.getCurrentUser();
  },

  /**
   * Update profile information
   */
  updateProfile(updatedFields) {
    const current = this.getCurrentUser();
    if (!current) return null;
    const updated = { ...current, ...updatedFields };
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  }
};

export default authService;
