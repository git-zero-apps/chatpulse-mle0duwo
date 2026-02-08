// Auto-generated database types from ZERO Builder
// Do not edit manually
export interface Profiles {
  id: string;
  full_name: string;
  role: string;
  avatar_url: string | null;
  status: string;
  active_conversation_count: number;
  workspace_id: string;
  created_at: string;
  updated_at: string;
}

export interface ProfilesInsert {
  full_name: string;
  role?: string;
  avatar_url: string | null;
  status?: string;
  active_conversation_count?: number;
  workspace_id: string;
}

export interface Workspaces {
  id?: string;
  name: string;
  owner_id: string;
  subscription_plan: string;
  subscription_status: string;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  widget_key: string;
  created_at: string;
  updated_at: string;
}

export interface WorkspacesInsert {
  name: string;
  owner_id: string;
  subscription_plan?: string;
  subscription_status?: string;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  widget_key?: string;
}

export interface Visitors {
  id?: string;
  workspace_id: string;
  name: string | null;
  email: string | null;
  company: string | null;
  location: string | null;
  browser: string | null;
  current_page_url: string | null;
  first_seen_at: string;
  last_seen_at: string;
  total_conversations: number;
  notes: string | null;
  session_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface VisitorsInsert {
  workspace_id: string;
  name: string | null;
  email: string | null;
  company: string | null;
  location: string | null;
  browser: string | null;
  current_page_url: string | null;
  first_seen_at?: string;
  last_seen_at?: string;
  total_conversations?: number;
  notes: string | null;
  session_id: string | null;
}

export interface Conversations {
  id?: string;
  workspace_id: string;
  visitor_id: string;
  assigned_agent_id: string | null;
  status: string;
  channel: string;
  started_at: string;
  ended_at: string | null;
  rating: number | null;
  tags?: unknown | null;
  visitor_name: string | null;
  visitor_email: string | null;
  created_at: string;
  updated_at: string;
}

export interface ConversationsInsert {
  workspace_id: string;
  visitor_id: string;
  assigned_agent_id: string | null;
  status?: string;
  channel: string;
  started_at?: string;
  ended_at: string | null;
  rating: number | null;
  tags?: unknown | null;
  visitor_name: string | null;
  visitor_email: string | null;
}

export interface Messages {
  id?: string;
  conversation_id: string;
  sender_type: string;
  sender_id: string | null;
  body: string;
  attachments?: Record<string, unknown> | null;
  is_read: boolean;
  sent_at: string;
  created_at: string;
  updated_at: string;
}

export interface MessagesInsert {
  conversation_id: string;
  sender_type: string;
  sender_id: string | null;
  body: string;
  attachments?: Record<string, unknown> | null;
  is_read?: boolean;
  sent_at?: string;
}

export interface CannedResponses {
  id?: string;
  workspace_id: string;
  title: string;
  body: string;
  shortcut_code: string | null;
  category: string | null;
  use_count: number;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface CannedResponsesInsert {
  workspace_id: string;
  title: string;
  body: string;
  shortcut_code: string | null;
  category: string | null;
  use_count?: number;
  created_by: string;
}

export interface WidgetSettings {
  id?: string;
  workspace_id: string;
  position: string;
  primary_color: string;
  greeting_message: string;
  offline_message: string;
  business_hours: Record<string, unknown> | null;
  avatar_url: string | null;
  logo_url: string | null;
  show_branding: boolean;
  created_at: string;
  updated_at: string;
}

export interface WidgetSettingsInsert {
  workspace_id: string;
  position?: string;
  primary_color?: string;
  greeting_message?: string;
  offline_message?: string;
  business_hours: Record<string, unknown> | null;
  avatar_url: string | null;
  logo_url: string | null;
  show_branding?: boolean;
}
