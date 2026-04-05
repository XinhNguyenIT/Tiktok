using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Friendship
{
    public long Id { get; set; }

    public string RequesterId { get; set; } = null!;

    public string AddresseeId { get; set; } = null!;

    public string Status { get; set; } = null!;

    public DateTime CreatedAt { get; set; }

    public DateTime? RespondedAt { get; set; }

    public virtual AspNetUser Addressee { get; set; } = null!;

    public virtual AspNetUser Requester { get; set; } = null!;
}
